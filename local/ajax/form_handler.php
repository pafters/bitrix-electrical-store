<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

use Bitrix\Main\Loader;
use Bitrix\Iblock;

function validatePhoneNumber($phone)
{
    $phone = trim((string)$phone);
    if (!$phone) return false;
    $phone = preg_replace('#[^0-9+]+#uis', '', $phone);
    if (!preg_match('#^(?:\\+?7|8|)(.*?)$#uis', $phone, $m)) return false;
    $phone = '+7' . preg_replace('#[^0-9]+#uis', '', $m[1]);
    if (!preg_match('#^\\+7[0-9]{10}$#uis', $phone, $m)) return false;
    return $phone;
}

function emailValidation($email)
{
    return (!preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^", $email)) ? false : true;
}
// 

if (!Loader::includeModule('iblock')) {
    var_export(['success' => false, 'error' => 'Непредвиденная ошибка со стороны сервера']);
    return;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    var_export(['success' => false, 'error' => 'Некорректный API метод. Отправьте POST запрос.']);
    return;
}


$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$product_id = isset($_POST['product_id']) ? trim($_POST['product_id']) : '';
$text = isset($_POST['text']) ? trim($_POST['text']) : '';


if ($product_id && $product_id !== '') {
    $element = CIBlockElement::GetByID($product_id);
    if ($arElement = $element->Fetch()) {
        $product_name = $arElement['NAME'];
    } else {
        echo json_encode(['success' => false, 'error' => "Товар, по которому оставлено обращение, не найден."]);
    }
}

if (empty($name)) {
    echo json_encode(['success' => false, 'type' => 'name', 'error' => 'Недоступное значение']);
    return;
}

if (empty($phone) || !validatePhoneNumber($phone)) {
    echo json_encode(['success' => false, 'type' => 'phone', 'error' => 'Неверный формат номера телефона']);
    return;
}

if (empty($email) || !emailValidation($email)) {
    echo json_encode(['success' => false, 'type' => 'email', 'error' => 'Недоступное значение']);
    return;
}

$iblock_code = $product_id ? 'ProductReqs' : 'ParthnerReqs';
$iblock_id = 0;

$ib_res = Iblock\IblockTable::getList(array(
    'filter' => array('=API_CODE' => $iblock_code),
    'select' => array('ID'),
));


if ($ar_res = $ib_res->fetch()) {
    $iblock_id = $ar_res['ID'];
}

if (!$iblock_id) {
    echo json_encode(['success' => false, 'error' => 'Непредвиденная ошибка со стороны сервера.']);
    return;
}

$el = new CIBlockElement;

$props =
    $product_name ? array(
        "NAME" =>  $name,
        "PHONE" => $phone,
        "EMAIL" => $email,
        "MESSAGE" => $text,
        "PRODUCT" => $product_name
    )
    : array(
        "NAME" =>  $name,
        "PHONE" => $phone,
        "EMAIL" => $email,
        "MESSAGE" => $text,
    );

$arLoadReqsArray = array(
    "IBLOCK_ID"      => $iblock_id,
    "NAME"           => $name,
    "ACTIVE"         => "Y",
    "PROPERTY_VALUES" => $props,
);

if ($REQ_ID = $el->Add($arLoadReqsArray)) {
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена!', $product_name]);
} else {
    echo json_encode(['success' => false, 'error' => 'Ошибка добавления заявки.']);
}

$res = \CEvent::Send($product_name ? 'PRODUCT_REQS_MAIL' : 'PARTNER_REQS_MAIL', 's1', $props);

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php');

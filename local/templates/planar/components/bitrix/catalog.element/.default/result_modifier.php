<?

use Bitrix\Iblock\ElementTable;

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogElementComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();

$data = \CIBlockElement::GetList([], ['ID' => $arResult["PROPERTIES"]["PRODUCER"]["VALUE"]], false, false, ['ID', 'NAME'])->Fetch();


$name = ($data ? $data['NAME'] : '');
$arResult["PROPERTIES"]["PRODUCER"]["EL_NAME"] = $name;

$propsStates = [
    !!$arResult["DETAIL_TEXT"],
    !!$arResult["PROPERTIES"]["CHARACTERISTICS"]["VALUE"],
    !!$arResult["PROPERTIES"]["DOCS"]["VALUE"]
];

$arResult["PROPERTIES"]["STATES"] = $propsStates;
// $arResult["PROPERTIES"]["PRODUCER"]["VALUE"]["NAME"] = $name;

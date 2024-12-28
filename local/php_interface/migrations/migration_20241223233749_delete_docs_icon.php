<?

declare(strict_types=1);

use Bitrix\Main\Loader;
use Bitrix\Iblock\IblockTable;
use Bitrix\Iblock\PropertyTable;

return static function (): void {


    // Проверка подключения модуля iblock
    if (!Loader::includeModule('iblock')) {
        die('Модуль iblock не подключен');
    }

    // Получение ID инфоблока по его коду
    $iblockId = IblockTable::getRow(['filter' => ['=CODE' => 'docs'], 'select' => ['ID']])['ID'];


    if (!$iblockId) {
        die('Инфоблок с кодом "docs" не найден.');
    }

    // Получение ID свойства ICON
    $property = PropertyTable::getList([
        'filter' => [
            '=IBLOCK_ID' => $iblockId,
            '=CODE' => 'ICON',
        ],
        'select' => ['ID']
    ])->fetch();


    if (!$property) {
        die('Свойство "ICON" в инфоблоке не найдено.');
    }


    $propertyId = $property['ID'];

    // Удаление свойства
    $manager = new CIBlockProperty();
    $result = $manager->Delete($propertyId);



    if ($result) {
        echo 'Свойство "ICON" успешно удалено из инфоблока "docs".';
    } else {
        echo 'Ошибка при удалении свойства "ICON": ' . $manager->LAST_ERROR;
    }
};

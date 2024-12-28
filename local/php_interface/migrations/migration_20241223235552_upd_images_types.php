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

    // Получение ID инфоблока по его API коду
    $iblockId = IblockTable::getRow(['filter' => ['=API_CODE' => 'Catalog'], 'select' => ['ID']])['ID'];

    if (!$iblockId) {
        die('Инфоблок с API_CODE "Catalog" не найден.');
    }

    // Получение ID свойства IMAGES
    $property = PropertyTable::getList([
        'filter' => [
            '=IBLOCK_ID' => $iblockId,
            '=CODE' => 'IMAGES',
        ],
        'select' => ['ID']
    ])->fetch();


    if (!$property) {
        die('Свойство "IMAGES" в инфоблоке не найдено.');
    }

    $propertyId = $property['ID'];



    // Обновление свойства IMAGES
    $manager = new CIBlockProperty();
    $result = $manager->Update($propertyId, [
        'FILE_TYPE' => '', // Очищаем ограничение на типы файлов
    ]);

    if ($result) {
        //Удаляем записи о расширениях файлов из таблицы b_iblock_property_file
        echo 'Ограничения на типы файлов для свойства "IMAGES" успешно сняты.';
    } else {
        echo 'Ошибка при обновлении свойства "IMAGES": ' . $manager->LAST_ERROR;
    }
};

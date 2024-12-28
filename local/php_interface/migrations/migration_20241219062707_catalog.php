<?php

declare(strict_types=1);

use Bitrix\Iblock\IblockTable;

return static function (): void {
    $fields = [
        'CODE' => [
            'DEFAULT_VALUE' => [
                'TRANSLITERATION' => 'Y',
                'UNIQUE' => 'Y',
            ],
            'IS_REQUIRED' => 'Y',
        ],
        'DETAIL_PICTURE' => [
            'IS_REQUIRED' => 'Y',
        ],
        'DETAIL_TEXT' => [
            'IS_REQUIRED' => 'N',
        ],
        'SECTION_CODE' => [
            'DEFAULT_VALUE' => [
                'TRANSLITERATION' => 'Y',
                'UNIQUE' => 'Y',
            ],
            'IS_REQUIRED' => 'Y',
        ],
    ];

    $manager = new CIBlock();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'API_CODE' => 'Catalog',
        'BIZPROC' => 'N',
        'CANONICAL_PAGE_URL' => '',
        'CODE' => 'catalog',
        'DESCRIPTION' => '',
        'DESCRIPTION_TYPE' => 'text',
        'DETAIL_PAGE_URL' => '#SITE_DIR#/catalog/#SECTION_CODE_PATH#/#ELEMENT_CODE#/',
        'EDIT_FILE_AFTER' => '',
        'EDIT_FILE_BEFORE' => '',
        'ELEMENTS_NAME' => 'Товары',
        'ELEMENT_ADD' => 'Добавить товар',
        'ELEMENT_DELETE' => 'Удалить товар',
        'ELEMENT_EDIT' => 'Изменить товар',
        'ELEMENT_NAME' => 'Товар',
        'FIELDS' => $fields,
        'GROUP_ID' => [1 => 'X', 2 => 'R'],
        'IBLOCK_TYPE_ID' => 'content',
        'INDEX_ELEMENT' => 'N',
        'INDEX_SECTION' => 'N',
        'LID' => 's1',
        'LIST_MODE' => 'S',
        'LIST_PAGE_URL' => '#SITE_DIR#/catalog/',
        'NAME' => 'Каталог',
        'PICTURE' => '',
        'PROPERTY_INDEX' => 'N',
        'RIGHTS_MODE' => 'S',
        'RSS_ACTIVE' => 'N',
        'RSS_FILE_ACTIVE' => 'N',
        'RSS_TTL' => 24,
        'RSS_YANDEX_ACTIVE' => 'N',
        'SECTIONS_NAME' => 'Разделы',
        'SECTION_ADD' => 'Добавить раздел',
        'SECTION_CHOOSER' => 'L',
        'SECTION_DELETE' => 'Удалить раздел',
        'SECTION_EDIT' => 'Изменить раздел',
        'SECTION_NAME' => 'Раздел',
        'SECTION_PAGE_URL' => '#SITE_DIR#/catalog/#SECTION_CODE_PATH#/',
        'SECTION_PROPERTY' => 'N',
        'SORT' => 50,
        'VERSION' => 2,
        'WORKFLOW' => 'N',
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create Catalog infoblock. ' . $manager->LAST_ERROR);
    }

    // Производитель (*)
    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'PRODUCER',
        'FILTRABLE' => 'Y',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Catalog'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'Y',
        'LINK_IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Producer'], 'select' => ['ID']])['ID'],
        'MULTIPLE' => 'N',
        'NAME' => 'Производитель',
        'PROPERTY_TYPE' => 'E',
        'SEARCHABLE' => 'N',
        'SORT' => 10,
        'WITH_DESCRIPTION' => 'N',
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create PRODUCER property. ' . Planar\get_bitrix_error());
    }


    // Фотографии товара
    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'IMAGES',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Catalog'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'N',
        'NAME' => 'Фотографии товара',
        'PROPERTY_TYPE' => 'F', // Тип файла
        'MULTIPLE' => 'Y', // Несколько файлов?  'Y' если нужно
        'USER_TYPE' => '', // Оставить пустым для стандартного типа файла
        'FILE_TYPE' => 'jpg, jpeg, png', // Разрешенные типы файлов
        'SORT' => 20, // Порядок сортировки
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create IMAGES property. ' . Planar\get_bitrix_error());
    }

    // Документы по товару
    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'DOCS',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Catalog'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'N',
        'NAME' => 'Документы по товару',
        'PROPERTY_TYPE' => 'F', // Тип файла
        'MULTIPLE' => 'Y', // Несколько файлов?  'Y' если нужно
        'USER_TYPE' => '', // Оставить пустым для стандартного типа файла
        'SORT' => 30, // Порядок сортировки
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create DOCS property. ' . Planar\get_bitrix_error());
    }

    // Характеристики
    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'CHARACTERISTICS',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Catalog'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'N',
        'NAME' => 'Характеристики',
        'PROPERTY_TYPE' => 'T', // Текстовый тип
        'USER_TYPE' => 'HTML', // Визуальный редактор
        'SORT' => 40, // Порядок сортировки
        'WITH_DESCRIPTION' => 'N', // Дополнительное описание не нужно
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create SETTINGS property. ' . Planar\get_bitrix_error());
    }
};

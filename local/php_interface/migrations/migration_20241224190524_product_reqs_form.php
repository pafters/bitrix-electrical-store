<?php

declare(strict_types=1);

use Bitrix\Iblock\IblockTable;

return static function (): void {
    $fields = [
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
        'API_CODE' => 'ProductReqs',
        'BIZPROC' => 'N',
        'CANONICAL_PAGE_URL' => '',
        'CODE' => 'product_reqs',
        'DESCRIPTION' => '',
        'DESCRIPTION_TYPE' => 'text',
        'DETAIL_PAGE_URL' => '',
        'EDIT_FILE_AFTER' => '',
        'EDIT_FILE_BEFORE' => '',
        'ELEMENTS_NAME' => 'Обращения',
        'ELEMENT_ADD' => 'Добавить обращение',
        'ELEMENT_DELETE' => 'Удалить обращение',
        'ELEMENT_EDIT' => 'Изменить обращение',
        'ELEMENT_NAME' => 'Обращение',
        'GROUP_ID' => [1 => 'X', 2 => 'R'],
        'IBLOCK_TYPE_ID' => 'form',
        'INDEX_ELEMENT' => 'N',
        'INDEX_SECTION' => 'N',
        'LID' => 's1',
        'FIELDS' => $fields,
        'LIST_MODE' => 'S',
        'LIST_PAGE_URL' => '',
        'NAME' => 'Обращения по товарам',
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
        'SECTION_PAGE_URL' => '',
        'SECTION_PROPERTY' => 'N',
        'SORT' => 70,
        'VERSION' => 2,
        'WORKFLOW' => 'N',
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create product_reqs iblock. ' . Planar\get_bitrix_error());
    }

    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'PHONE',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'ProductReqs'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'Y',
        'NAME' => 'Телефон',
        "DEFAULT_VALUE" => "",
        "PROPERTY_TYPE" => "S",
        'SORT' => 10,
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create PHONE property. ' . Planar\get_bitrix_error());
    }

    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'EMAIL',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'ProductReqs'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'Y',
        'NAME' => 'E-mail',
        "DEFAULT_VALUE" => "",
        "PROPERTY_TYPE" => "S",
        'SORT' => 20,
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create EMAIL property. ' . Planar\get_bitrix_error());
    }

    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'PRODUCT',
        'FILTRABLE' => 'Y',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'ProductReqs'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'Y',
        'LINK_IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Catalog'], 'select' => ['ID']])['ID'],
        'MULTIPLE' => 'N',
        'NAME' => 'Товар',
        'PROPERTY_TYPE' => 'E',
        'SEARCHABLE' => 'N',
        'SORT' => 30,
        'WITH_DESCRIPTION' => 'N',
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create PRODUCT property. ' . Planar\get_bitrix_error());
    }

    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'MESSAGE',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'ProductReqs'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'N',
        'NAME' => 'Текст сообщения',
        "DEFAULT_VALUE" => "",
        "PROPERTY_TYPE" => "T",
        'SORT' => 40,
        "USER_TYPE" => "HTML",
        'WITH_DESCRIPTION' => 'N', // Дополнительное описание не нужно
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create MESSAGE property. ' . Planar\get_bitrix_error());
    }
};

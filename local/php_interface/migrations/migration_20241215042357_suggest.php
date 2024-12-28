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
        'PREVIEW_PICTURE' => [
            'IS_REQUIRED' => 'Y',
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
        'API_CODE' => 'Suggest',
        'BIZPROC' => 'N',
        'CANONICAL_PAGE_URL' => '',
        'CODE' => 'suggest',
        'DESCRIPTION' => '',
        'DESCRIPTION_TYPE' => 'text',
        'DETAIL_PAGE_URL' => '#SITE_DIR#/suggests/#ELEMENT_CODE#/',
        'EDIT_FILE_AFTER' => '',
        'EDIT_FILE_BEFORE' => '',
        'ELEMENTS_NAME' => 'Предложения',
        'ELEMENT_ADD' => 'Добавить предложение',
        'ELEMENT_DELETE' => 'Удалить предложение',
        'ELEMENT_EDIT' => 'Изменить предложение',
        'ELEMENT_NAME' => 'Предложение',
        'FIELDS' => $fields,
        'GROUP_ID' => [1 => 'X', 2 => 'R'],
        'IBLOCK_TYPE_ID' => 'content',
        'INDEX_ELEMENT' => 'N',
        'INDEX_SECTION' => 'N',
        'LID' => 's1',
        'LIST_MODE' => 'S',
        'LIST_PAGE_URL' => '#SITE_DIR#/suggests/',
        'NAME' => 'Предложения',
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
        'SECTION_PAGE_URL' => '#SITE_DIR#/suggests/#SECTION_CODE_PATH#/',
        'SECTION_PROPERTY' => 'N',
        'SORT' => 50,
        'VERSION' => 2,
        'WORKFLOW' => 'N',
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create Suggests infoblock. ' . $manager->LAST_ERROR);
    }

    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'LINK',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Suggest'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'N',
        'NAME' => 'Ссылка',
        "DEFAULT_VALUE" => "",
        "PROPERTY_TYPE" => "S",
        'SORT' => 30,
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create course age category property. ' . Planar\get_bitrix_error());
    }
};

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
        'PREVIEW_TEXT' => [
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
        'API_CODE' => 'Advantages',
        'BIZPROC' => 'N',
        'CANONICAL_PAGE_URL' => '',
        'CODE' => 'advantages',
        'DESCRIPTION' => '',
        'DESCRIPTION_TYPE' => 'text',
        'DETAIL_PAGE_URL' => '#SITE_DIR#/advantages/#ELEMENT_CODE#/',
        'EDIT_FILE_AFTER' => '',
        'EDIT_FILE_BEFORE' => '',
        'ELEMENTS_NAME' => 'Преимущества',
        'ELEMENT_ADD' => 'Добавить преимущество',
        'ELEMENT_DELETE' => 'Удалить преимущество',
        'ELEMENT_EDIT' => 'Изменить преимущество',
        'ELEMENT_NAME' => 'Преимущество',
        'FIELDS' => $fields,
        'GROUP_ID' => [1 => 'X', 2 => 'R'],
        'IBLOCK_TYPE_ID' => 'content',
        'INDEX_ELEMENT' => 'N',
        'INDEX_SECTION' => 'N',
        'LID' => 's1',
        'LIST_MODE' => 'S',
        'LIST_PAGE_URL' => '#SITE_DIR#/advantages/',
        'NAME' => 'Преимущества',
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
        'SECTION_PAGE_URL' => '#SITE_DIR#/advantages/#SECTION_CODE_PATH#/',
        'SECTION_PROPERTY' => 'N',
        'SORT' => 50,
        'VERSION' => 2,
        'WORKFLOW' => 'N',
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create Advantages infoblock. ' . $manager->LAST_ERROR);
    }
};
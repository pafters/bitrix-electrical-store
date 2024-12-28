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
        'API_CODE' => 'Docs',
        'BIZPROC' => 'N',
        'CANONICAL_PAGE_URL' => '',
        'CODE' => 'docs',
        'DESCRIPTION' => '',
        'DESCRIPTION_TYPE' => 'text',
        'DETAIL_PAGE_URL' => '',
        'EDIT_FILE_AFTER' => '',
        'EDIT_FILE_BEFORE' => '',
        'ELEMENTS_NAME' => 'Документы',
        'ELEMENT_ADD' => 'Добавить документ',
        'ELEMENT_DELETE' => 'Удалить документ',
        'ELEMENT_EDIT' => 'Изменить документ',
        'ELEMENT_NAME' => 'Документ',
        'GROUP_ID' => [1 => 'X', 2 => 'R'],
        'IBLOCK_TYPE_ID' => 'directory',
        'INDEX_ELEMENT' => 'N',
        'INDEX_SECTION' => 'N',
        'LID' => 's1',
        'FIELDS' => $fields,
        'LIST_MODE' => 'S',
        'LIST_PAGE_URL' => '',
        'NAME' => 'Документы',
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
        throw new RuntimeException('Can not create docs iblock. ' . Planar\get_bitrix_error());
    }

    $manager = new CIBlockProperty();

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'ICON',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Docs'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'N',
        'NAME' => 'Иконка',
        'PROPERTY_TYPE' => 'F', // Тип файла
        'MULTIPLE' => 'N', // Несколько файлов?  'Y' если нужно
        'USER_TYPE' => '', // Оставить пустым для стандартного типа файла
        'FILE_TYPE' => 'jpg, jpeg, png, svg', // Разрешенные типы файлов
        'SORT' => 100, // Порядок сортировки
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create icon property. ' . Planar\get_bitrix_error());
    }

    $result = $manager->Add([
        'ACTIVE' => 'Y',
        'CODE' => 'DOC',
        'IBLOCK_ID' => IblockTable::getRow(['filter' => ['=API_CODE' => 'Docs'], 'select' => ['ID']])['ID'],
        'IS_REQUIRED' => 'Y',
        'NAME' => 'Документ',
        'PROPERTY_TYPE' => 'F', // Тип файла
        'MULTIPLE' => 'N', // Несколько файлов?  'Y' если нужно
        'USER_TYPE' => '', // Оставить пустым для стандартного типа файла
        'SORT' => 200, // Порядок сортировки
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create DOC property. ' . Planar\get_bitrix_error());
    }
};

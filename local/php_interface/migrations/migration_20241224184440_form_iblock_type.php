<?php

declare(strict_types=1);

return static function (): void {
    $en = [
        'ELEMENT_NAME' => 'Elements',
        'NAME' => 'Form',
        'SECTION_NAME' => 'Sections',
    ];

    $ru = [
        'ELEMENT_NAME' => 'Элементы',
        'NAME' => 'Формы обратной связи',
        'SECTION_NAME' => 'Разделы',
    ];

    $manager = new CIBlockType();
    $result = $manager->Add([
        'EDIT_FILE_AFTER' => '',
        'EDIT_FILE_BEFORE' => '',
        'ID' => 'form',
        'IN_RSS' => 'N',
        'LANG' => ['en' => $en, 'ru' => $ru],
        'SECTIONS' => 'Y',
        'SORT' => 10,
    ]);

    if (!$result) {
        throw new RuntimeException('Can not create content iblock type. ' . Planar\get_bitrix_error());
    }
};

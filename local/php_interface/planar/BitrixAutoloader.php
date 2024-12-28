<?php

declare(strict_types=1);

namespace Planar;

use Bitrix\Main\Loader;

final class BitrixAutoloader
{
    public static function register(): void
    {
        $map = [
            'highloadblock' => [
                'Bitrix\Highloadblock\HighloadBlockLangTable',
                'Bitrix\Highloadblock\HighloadBlockRightsTable',
                'Bitrix\Highloadblock\HighloadBlockTable',
            ],
            'iblock' => [
                'Bitrix\Iblock\ElementPropertyTable',
                'Bitrix\Iblock\ElementTable',
                'Bitrix\Iblock\IblockFieldTable',
                'Bitrix\Iblock\IblockGroupTable',
                'Bitrix\Iblock\IblockMessageTable',
                'Bitrix\Iblock\IblockRssTable',
                'Bitrix\Iblock\IblockSiteTable',
                'Bitrix\Iblock\IblockTable',
                'Bitrix\Iblock\PropertyEnumerationTable',
                'Bitrix\Iblock\PropertyFeatureTable',
                'Bitrix\Iblock\PropertyTable',
                'Bitrix\Iblock\SectionElementTable',
                'Bitrix\Iblock\SectionPropertyTable',
                'Bitrix\Iblock\SectionTable',
                'Bitrix\Iblock\TypeLanguageTable',
                'Bitrix\Iblock\TypeTable',
                'CIBlock',
                'CIBlockElement',
                'CIBlockFormatProperties',
                'CIBlockParameters',
                'CIBlockPriceTools',
                'CIBlockProperty',
                'CIBlockPropertyEnum',
                'CIBlockRSS',
                'CIBlockResult',
                'CIBlockSection',
                'CIBlockType',
                'CIBlockXMLFile',
            ],
        ];

        $preparedMap = [];
        foreach ($map as $module => $classes) {
            foreach ($classes as $class) {
                $preparedMap[$class] = $module;
            }
        }

        spl_autoload_register(static function ($classname) use ($preparedMap) {
            if (isset($preparedMap[$classname])) {
                Loader::includeModule($preparedMap[$classname]);
                Loader::autoLoad($classname);
            }
        });
    }
}

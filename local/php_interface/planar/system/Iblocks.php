<?php

declare(strict_types=1);

namespace Planar;

use Bitrix\Iblock\IblockTable;

final class Iblocks
{
    private static ?array $cache = null;

    public static function adventageId(): int
    {
        return self::getId('Adventage');
    }

    public static function suggestId(): int
    {
        return self::getId('Suggest');
    }

    private static function getId(string $apiCode): int
    {
        $id = self::getMapWithLocalCache()["~{$apiCode}"] ?? null;

        if (null === $id) {
            throw new \RuntimeException(sprintf('Not found iblock "%s".', $apiCode));
        }

        return $id;
    }
    private static function getMapWithBitrixCache(): array
    {
        $cache = new \CPHPCache();
        $cacheDir = '/phosagro_iblock_ids';

        if ($cache->InitCache(86400, 'phosagro_iblock_ids', $cacheDir)) {
            return $cache->GetVars();
        }

        $cache->StartDataCache();

        try {
            $result = self::loadMap();
        } catch (\Throwable $error) {
            $cache->AbortDataCache();

            throw $error;
        }

        global $CACHE_MANAGER;
        $CACHE_MANAGER->StartTagCache($cacheDir);
        $CACHE_MANAGER->RegisterTag('iblock_id_new');
        $CACHE_MANAGER->EndTagCache();

        $cache->EndDataCache($result);

        return $result;
    }
    /**
     * @return array<string,int>
     */
    private static function getMapWithLocalCache(): array
    {
        return self::$cache ??= self::getMapWithBitrixCache();
    }

    /**
     * @return array<string,int>
     */
    private static function loadMap(): array
    {
        /** @var array<string,int> $result */
        $result = [];

        $found = IblockTable::getList([
            'select' => [
                'API_CODE',
                'ID',
            ],
        ]);

        while ($row = $found->fetchRaw()) {
            $code = $row['API_CODE'];
            $id = (int) $row['ID'];
            $key = "~{$code}";

            if (\array_key_exists($key, $result)) {
                throw new \RuntimeException(sprintf('Duplicate iblock "%s"', $code));
            }

            $result[$key] = $id;
        }

        return $result;
    }
}

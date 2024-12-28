<?php

declare(strict_types=1);

namespace Planar;

use Bitrix\Main\EventManager;
use Bitrix\Main\Localization\Loc;
use CHTTP;

require __DIR__ . \DIRECTORY_SEPARATOR . 'planar' . \DIRECTORY_SEPARATOR . 'ClassAutoloader.php';

ClassAutoloader::register();
BitrixAutoloader::register();

Loc::loadMessages(__FILE__);

function get_bitrix_error(): string
{
    $app = ($GLOBALS['APPLICATION'] ?? null);

    if (!$app instanceof \CMain) {
        return '';
    }

    $exception = $app->GetException();

    if (!$exception instanceof \CApplicationException) {
        return '';
    }

    $error = $exception->GetString();

    if (!\is_string($error)) {
        return '';
    }

    return $error;
}

$events = EventManager::getInstance();

$events->addEventHandler('main', 'OnBuildGlobalMenu', static function (&$globalMenu, &$moduleMenu): void {
    $moduleMenu[] = [
        'parent_menu' => 'global_menu_settings',
        'section' => 'planar_migrations',
        'sort' => 2100,
        'text' => Loc::getMessage('MIGRATIONS'),
        'title' => Loc::getMessage('MIGRATIONS_TITLE'),
        'url' => '/bitrix/admin/migrations.php?lang=' . LANG,
        'icon' => 'highloadblock_menu_icon',
        'page_icon' => 'highloadblock_menu_icon',
    ];
});

\Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'main',
    'OnEpilog',
    static function (): void {
        if (!defined('ADMIN_SECTION') && defined('ERROR_404')) {
            CHTTP::SetStatus('404 Not Found');
            global $APPLICATION, $USER;
            $APPLICATION->RestartBuffer();
            include($_SERVER['DOCUMENT_ROOT'] . SITE_TEMPLATE_PATH . '/header.php');
            include($_SERVER['DOCUMENT_ROOT'] . '/404.php');
            include($_SERVER['DOCUMENT_ROOT'] . SITE_TEMPLATE_PATH . '/footer.php');
        }
    },
);

<?
include_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404", "Y");

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

$APPLICATION->SetTitle("Страница не найдена");
$APPLICATION->SetPageProperty("NOT_SHOW_NAV_CHAIN", "Y");
$currentPage = $APPLICATION->GetCurPage();
?>
<? if (str_contains($currentPage, '/catalog')): ?>
    <main class="static__page card-page">
        <div class="container">
            <h1>Страница не найдена</h1>
        </div>
    </main>
<? endif ?>
<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
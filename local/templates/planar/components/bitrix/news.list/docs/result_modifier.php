<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>
<?
$filteredItems = [];
foreach ($arResult["ITEMS"] as $item) {
	if (isset($item['CODE']) && in_array($item['CODE'], $arParams['DOCUMENT_CODE'])) {
		$filteredItems[] = $item;
	}
}

$arResult["ITEMS"] = $filteredItems;

?>
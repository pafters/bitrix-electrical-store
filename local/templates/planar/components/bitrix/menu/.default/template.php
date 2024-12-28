<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<nav class="nav">
<ul class="nav__list">

<?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
		continue;
?>
	<?if($arItem["SELECTED"]):?>
		<li class="nav__item nav__item--active"><a data-scroll="data-scroll" href="<?=$arItem["LINK"]?>" class="scroll nav__link"><?=$arItem["TEXT"]?></a></li>
	<?else:?>
		<li class="nav__item nav__item"><a data-scroll="data-scroll" href="<?=$arItem["LINK"]?>" class="scroll nav__link"><?=$arItem["TEXT"]?></a></li>
	<?endif?>
	
<?endforeach?>

</ul>
</nav>
<?endif?>
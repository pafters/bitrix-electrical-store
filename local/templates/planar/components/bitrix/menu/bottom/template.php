<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult)): ?>
	<div class="contacts-footer__list">
		<?
		foreach ($arResult as $arItem):
			if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
				continue;
		?>
			<div data-sal="slide-left" data-sal-duration="900" class="contacts-footer__item">
				<h4 class="contacts-footer__title"><?= $arItem["TEXT"] ?></h4><span class="contacts-footer__span"><?= substr($arItem["LINK"], 1); ?></span>
			</div>

		<? endforeach ?>
	</div>
<? endif ?>
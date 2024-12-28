<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

$this->setFrameMode(true);
?>
<div class="product">
	<ul class="product__wrapper">
		<?php foreach ($arResult['ITEMS'] as $arItem): ?>

			<li class="product__list catalog__item">
				<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="product__card">
					<?php if ($arItem['DETAIL_PICTURE']) : ?>
						<img src="<?= $arItem['DETAIL_PICTURE']['SRC'] ?>" alt="<?= $arItem['DETAIL_PICTURE']['ALT'] ?>" title="<?= $arItem['DETAIL_PICTURE']['TITLE'] ?>">
					<?php endif; ?>
					<div class="product__info">
						<b>
							<?= $arItem['NAME'] ?>
						</b>
						<?php if ($arItem['PROPERTIES']['PRODUCER']['VALUE']): ?>
							<p>
								Производитель: <?= $arItem['PROPERTIES']['PRODUCER']['VALUE'] ?>
							</p>
						<?php endif; ?>
					</div>
				</a>
			</li>
		<?php endforeach; ?>
	</ul>
</div>
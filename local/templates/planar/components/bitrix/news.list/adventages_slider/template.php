<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>
<div id="advantages" class="section advantages">
	<div class="tns-outer" id="tns1-ow">
		<div class="tns-ovh">
			<div class="tns-inner" id="tns1-iw">
				<div class="advantages__sliders tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal">
					<? foreach ($arResult["ITEMS"] as $arItem): ?>
						<div class="advantages__slide" style="background-image: url(<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" id="tns1-item0">
							<div class="container">
								<div class="advantages__content">
									<h2 class="section__title advantages__title"><?= $arItem["NAME"] ?></h2>
									<p class="section__text advantages__text"><?= $arItem["PREVIEW_TEXT"] ?></p>
									<div class="section__button">
										<button data-ripple-color="light" class="button button--ripple button--partner">Стать партнером</button>
									</div>
								</div>
							</div>
						</div>
					<? endforeach; ?>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="advantages__slider">
			<div class="slider__controls" aria-label="Carousel Navigation" tabindex="0">
				<button data-ripple-color="light" class="button button--ripple slider__button slider__button--prev" aria-controls="tns1" tabindex="-1" data-controls="prev">
					<svg viewBox="0 0 8 14" class="angle-left angle-left--undefined">
						<use xlink:href="#angle-left"></use>
					</svg>
				</button>
				<button data-ripple-color="light" class="button button--ripple slider__button slider__button--next" aria-controls="tns1" tabindex="-1" data-controls="next">
					<svg viewBox="0 0 8 14" class="angle-left angle-left--right">
						<use xlink:href="#angle-left"></use>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
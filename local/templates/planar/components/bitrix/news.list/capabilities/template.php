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
<div id="capability" class="section capability nav-section">
	<div class="container">
		<div class="section__wrapper false">
			<div class="section__header">
				<h2 data-sal="slide-up" data-sal-duration="900" class="section__title circle">
					<? $APPLICATION->IncludeComponent(
						"bitrix:main.include",
						".default",
						array(
							"AREA_FILE_SHOW" => "file",
							"AREA_FILE_SUFFIX" => "inc",
							"EDIT_TEMPLATE" => "",
							"PATH" => "local/include/main/capability__title.php",
							"COMPONENT_TEMPLATE" => ".default"
						),
						false
					); ?></h2>
				<p data-sal="slide-up" data-sal-duration="900" data-sal-delay="200" class="section__text">
					<? $APPLICATION->IncludeComponent(
						"bitrix:main.include",
						".default",
						array(
							"AREA_FILE_SHOW" => "file",
							"AREA_FILE_SUFFIX" => "inc",
							"EDIT_TEMPLATE" => "",
							"PATH" => "local/include/main/capability__text.php",
							"COMPONENT_TEMPLATE" => ".default"
						),
						false
					); ?>
				</p>
			</div>
			<ul class="capability__list">
				<? foreach ($arResult["ITEMS"] as $index => $arItem): ?>
					<li data-sal="slide-up" data-sal-duration="900" data-sal-delay="300" class="capability__item">
						<figure class="capability-block">
							<div class="capability-block__image-wrapper">
								<div class="capability-block__image"><img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="garage" class="capability-block__img"></div>
								<div data-sal="slide-right" data-sal-duration="900" data-sal-delay="600" class="capability-block__counter"><span class="capability-block__span"><?= $index + 1 ?></span></div>
							</div>
							<figcaption class="capability-block__figcaption">
								<h2 data-sal="slide-right" data-sal-duration="900" data-sal-delay="300" class="capability-block__title"><?= $arItem["NAME"] ?></h2>
								<?= $arItem["PREVIEW_TEXT"] ?>
							</figcaption>
						</figure>
					</li>
				<? endforeach; ?>
			</ul>
		</div>
	</div>
</div>
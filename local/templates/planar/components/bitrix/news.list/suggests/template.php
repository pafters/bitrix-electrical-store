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
<div id="suggest" class="section suggest nav-section">
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
							"PATH" => "local/include/main/suggest__title.php",
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
							"PATH" => "local/include/main/suggest__text.php",
							"COMPONENT_TEMPLATE" => ".default"
						),
						false
					); ?></p>
			</div>
			<ul class="suggest__list">
				<? foreach ($arResult["ITEMS"] as $index => $arItem): ?>
					<? if ($arItem["PROPERTIES"]["LINK"]["VALUE"]) : ?>
						<a href="<?= $arItem["PROPERTIES"]["LINK"]["VALUE"] ?>">
							<li data-sal="slide-up" data-sal-duration="900" data-sal-delay="<? $index * 100 ?>" class="suggest__item">
								<figure class="suggest__figure">
									<div class="suggest__header">
										<div class="suggest__image"><img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="scheme" class="suggest__img"></div>
									</div>
									<figcaption class="suggest__figcaption"><span class="suggest__span"><?= $arItem["NAME"] ?></span>
									</figcaption>
								</figure>
							</li>
						</a>
					<? else : ?>
						<li data-sal="slide-up" data-sal-duration="900" data-sal-delay="000" class="suggest__item">
							<figure class="suggest__figure">
								<div class="suggest__header">
									<div class="suggest__image"><img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="scheme" class="suggest__img"></div>
								</div>
								<figcaption class="suggest__figcaption"><span class="suggest__span"><?= $arItem["NAME"] ?></span>
								</figcaption>
							</figure>
						</li>
					<? endif ?>
				<? endforeach; ?>
			</ul>
		</div>
	</div>
</div>
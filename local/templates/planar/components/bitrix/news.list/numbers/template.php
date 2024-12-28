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
<div id="numbers" class="section numbers" style="background-color: rgba(131, 137, 160, 0.03)">
	<div class="container">
		<div class="section__wrapper">
			<div class="section__header">
				<h2 data-sal="slide-up" data-sal-duration="900" class="section__title circle">
					<? $APPLICATION->IncludeComponent(
						"bitrix:main.include",
						".default",
						array(
							"AREA_FILE_SHOW" => "file",
							"AREA_FILE_SUFFIX" => "inc",
							"EDIT_TEMPLATE" => "",
							"PATH" => "local/include/main/numbers__title.php",
							"COMPONENT_TEMPLATE" => ".default"
						),
						false
					); ?>
				</h2>
			</div>
			<ul class="numbers__list">
				<? foreach ($arResult["ITEMS"] as $index => $arItem): ?>
					<li data-sal="slide-up" data-sal-duration="900" data-sal-delay="<?= $index * 100 ?>" class="numbers__item">
						<div class="about-item">
							<div class="about-item__icon">
								<img src="<?= \htmlspecialchars(\CFile::GetPath($arItem["PROPERTIES"]["ICON"]["VALUE"])); ?>">
							</div>
							<div class="about-item__content">
								<h2 class="about-item__title"><?= $arItem["NAME"] ?></h2>
								<p class="about-item__text"><?= $arItem["PREVIEW_TEXT"] ?></p>
							</div>
						</div>
					</li>
				<? endforeach; ?>
			</ul>
		</div>
	</div>
</div>
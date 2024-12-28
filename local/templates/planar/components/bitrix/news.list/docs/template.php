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
<? if ($arResult["ITEMS"]): ?>
	<? for ($i = 0; $i < count($arResult["ITEMS"]); $i += 2): ?>
		<? $arItem = $arResult["ITEMS"][$i]; ?>
		<? $arItem2 = $arResult["ITEMS"][$i + 1]; ?>
		<ul>
			<? if (isset($arItem)): ?>
				<? preg_match('/\.([^\.]+)$/', \CFile::GetFileArray($arItem["PROPERTIES"]["DOC"]["VALUE"])["ORIGINAL_NAME"], $fileFormats); ?>
				<li class="docs__item">
					<div class="docs__icon">
						<img src="/upload/images/svg/<?= \htmlspecialchars($fileFormats[1]); ?>.svg" onerror="this.style.display='none';">
					</div>
					<div class="docs__content"><a href="<?= \htmlspecialchars(\CFile::GetPath($arItem["PROPERTIES"]["DOC"]["VALUE"])); ?>" target="_black" class="link docs__link">
							<span class="docs__text"><?= $arItem["NAME"] ?></span>
						</a>
						<span class="docs__size"> <?= $fileFormats[1] ?  $fileFormats[1] . ", " : "" ?>
							<?= \CFile::FormatSize(\CFile::GetFileArray($arItem["PROPERTIES"]["DOC"]["VALUE"])["FILE_SIZE"]) ?></span>
					</div>
				</li>
			<? endif; ?>
			<? if ($arItem2): ?>
				<? preg_match('/\.([^\.]+)$/', \CFile::GetFileArray($arItem2["PROPERTIES"]["DOC"]["VALUE"])["ORIGINAL_NAME"], $fileFormats); ?>
				<li class="docs__item">
					<div class="docs__icon">
						<img src="/upload/images/svg/<?= \htmlspecialchars($fileFormats[1]); ?>.svg"
							onerror="this.style.display='none';">
					</div>
					<div class="docs__content"><a href="<?= \htmlspecialchars(\CFile::GetPath($arItem2["PROPERTIES"]["DOC"]["VALUE"])); ?>" target="_black" class="link docs__link">
							<span class="docs__text"><?= $arItem2["NAME"] ?></span>
						</a>
						<span class="docs__size"> <?= $fileFormats[1] ?  $fileFormats[1] . ", " : "" ?>
							<?= \CFile::FormatSize(\CFile::GetFileArray($arItem2["PROPERTIES"]["DOC"]["VALUE"])["FILE_SIZE"]) ?></span>
					</div>
				</li>
			<? endif; ?>
		</ul>
	<? endfor; ?>
<? endif; ?>
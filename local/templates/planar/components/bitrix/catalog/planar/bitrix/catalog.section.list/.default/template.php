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


<div class="section__header">
  <h2 data-sal="slide-up" data-sal-duration="900" class="section__title circle sal-animate"><?= $arResult["SECTION"]["NAME"] ?? 'Каталог' ?></h2>
</div>
<div class="catalog">
  <ul class="suggest__list">
    <? foreach ($arResult["SECTIONS"] as $arSection): ?>
      <a class="suggest__item catalog__item" href="<?= $arSection["SECTION_PAGE_URL"] ?>">
        <li data-sal="slide-up" data-sal-duration="900" class="sal-animate">
          <figure class="suggest__figure">
            <div class="suggest__header">
              <div class="suggest__image">
                <? if ($arSection["PICTURE"]): ?>
                  <img src="<?= $arSection["PICTURE"]["SRC"] ?>" alt="<?= $arSection["NAME"] ?>" class="suggest__img">
                <? else: ?>
                  <img src="upload/images/default_image.jpg" alt="<?= $arSection["NAME"] ?>" class="suggest__img">
                <? endif; ?>
              </div>
            </div>
            <figcaption class="suggest__figcaption"><span class="suggest__span"><?= $arSection["NAME"] ?></span></figcaption>
          </figure>
        </li>
      </a>
    <? endforeach; ?>
  </ul>
</div>
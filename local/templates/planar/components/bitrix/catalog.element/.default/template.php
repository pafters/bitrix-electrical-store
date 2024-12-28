<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

?>

<div class="section__header">
	<h1 class="section__title circle"><?= $arResult["NAME"] ?></h1>
	<h2 class="product__producer"><?= $arResult["PROPERTIES"]["PRODUCER"]["EL_NAME"]; ?></h2>
</div>
<div class="card">
	<div class="card__header">
		<div class="card__image">
			<div id="productSwiper" class="swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="#" data-modal-target="#modal" class="modal-trigger">
							<img src="<?= $arResult["DETAIL_PICTURE"]['SRC'] ?>" alt="<?= $arResult["NAME"] ?>">
						</a>
					</div>
					<? foreach ($arResult["PROPERTIES"]["IMAGES"]["VALUE"] as $index => $photoID): ?>
						<? $photo = \CFile::GetFileArray($photoID); ?>
						<div class="swiper-slide">
							<a href="#" data-modal-target="#modal" class="modal-trigger">
								<img src="<?= $photo["SRC"]  ?>" alt="<?= $photo["ORIGINAL_NAME"] ?>">
							</a>
						</div>
					<? endforeach; ?>
				</div>
				<div class="swiper-pagination"></div>
				<!-- <div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div> -->
			</div>
		</div>
		<div class="card__info">
			<div class="card__excerpt"><?= $arResult["PREVIEW_TEXT"] ?></div>
			<div class="section__button">
				<button data-ripple-color="light" id="test-btn" class="button button--ripple button--partner">Запросить цену<span class="ripple-box"></span></button>
			</div>
		</div>
	</div>
	<div class="card__tabs">
		<div class="card__tabs-buttons">
			<? if ($arResult["DETAIL_TEXT"]): ?>
				<p class="card__tabs-button card__tabs-button--active card__tabs-content--description" data-tab="description">Описание</p>
			<? endif; ?>
			<? if ($arResult["PROPERTIES"]["CHARACTERISTICS"]["VALUE"]): ?>
				<p class="card__tabs-button <?= $arResult["PROPERTIES"]["STATES"][0] ? '' : 'card__tabs-button--active' ?>"
					data-tab="features">Характеристики</p>
			<? endif ?>
			<? if ($arResult["PROPERTIES"]["DOCS"]["VALUE"]): ?>
				<p class="card__tabs-button <?= ($arResult["PROPERTIES"]["STATES"][0]
												|| $arResult["PROPERTIES"]["STATES"][1]) ? '' : 'card__tabs-button--active' ?>"
					data-tab="documents">Документы</p>
			<? endif ?>
		</div>
		<? if ($arResult["DETAIL_TEXT"]): ?>
			<div class="card__tabs-content card__tabs-content--active card__tabs-content--description" id="description">
				<p><?= $arResult["DETAIL_TEXT"] ?></p> <!-- Use DETAIL_TEXT for description -->
			</div>
		<? endif ?>
		<? if ($arResult["PROPERTIES"]["CHARACTERISTICS"]["VALUE"]): ?>
			<div class="card__tabs-content card__tabs-content--description <?= $arResult["PROPERTIES"]["STATES"][0] ? '' : 'card__tabs-content--active' ?>"
				id="features">
				<div class="card-table-wrapper card__table">
					<?= htmlspecialchars_decode($arResult["PROPERTIES"]["CHARACTERISTICS"]["VALUE"]["TEXT"])  ?>
				</div>
			</div>
		<? endif ?>
		<div class="card__tabs-content <?= ($arResult["PROPERTIES"]["STATES"][0]
											|| $arResult["PROPERTIES"]["STATES"][1]) ? '' : 'card__tabs-content--active' ?>"
			id="documents">
			<div class="docs card__docs">
				<? if ($arResult["PROPERTIES"]["DOCS"]["VALUE"]): ?>
					<? for ($i = 0; $i < count($arResult["PROPERTIES"]["DOCS"]["VALUE"]); $i += 2): ?>
						<? $arItem = $arResult["PROPERTIES"]["DOCS"]["VALUE"][$i]; ?>
						<? $arItem2 = $arResult["PROPERTIES"]["DOCS"]["VALUE"][$i + 1]; ?>
						<ul>
							<? if ($arItem): ?>
								<? $file = \CFile::GetFileArray($arItem) ?>
								<? preg_match('/\.([^\.]+)$/', $file["ORIGINAL_NAME"], $fileFormats); ?>
								<li class="docs__item">
									<div class="docs__icon">
										<img src="/upload/images/svg/<?= $fileFormats[1] ?>.svg"
											onerror="this.style.display='none';">
									</div>
									<div class="docs__content"><a href="<?= \htmlspecialchars($file["SRC"]); ?>" target="_black" class="link docs__link">
											<span class="docs__text"><?= $file["ORIGINAL_NAME"] ?></span>
										</a>
										<span class="docs__size"> <?= $fileFormats[1] ?  $fileFormats[1] . ", " : "" ?>
											<?= \CFile::FormatSize($file["FILE_SIZE"]) ?></span>
									</div>
								</li>
							<? endif; ?>
							<? if ($arItem2): ?>
								<? $file = \CFile::GetFileArray($arItem2) ?>
								<? preg_match('/\.([^\.]+)$/', $file["ORIGINAL_NAME"], $fileFormats); ?>
								<li class="docs__item">
									<div class="docs__icon">
										<img src="/upload/images/svg/<?= $fileFormats[1] ?>.svg"
											onerror="this.style.display='none';">
									</div>
									<div class="docs__content"><a href="<?= \htmlspecialchars($file["SRC"]); ?>" target="_black" class="link docs__link">
											<span class="docs__text"><?= $file["ORIGINAL_NAME"] ?></span>
										</a>
										<span class="docs__size"> <?= $fileFormats[1] ?  $fileFormats[1] . ", " : "" ?>
											<?= \CFile::FormatSize($file["FILE_SIZE"]) ?></span>
									</div>
								</li>
							<? endif; ?>
						</ul>
					<? endfor; ?>
				<? endif ?>
			</div>
		</div>
	</div>
</div>
<div class="modal" id="modal">
	<div class="modal-content">
		<span class="close-button">&times;</span>
		<div class="swiper-container">
			<div class="swiper-wrapper modal-swiper-wrapper">
				<div class="swiper-slide">
					<img src="" alt="" id="modal-image">
				</div>
			</div>
			<div class="swiper-button-prev modal-prev"></div>
			<div class="swiper-button-next modal-next"></div>
		</div>
	</div>
</div>
<div>
	<? $APPLICATION->IncludeComponent(
		"planar:form.component",
		"",
		array("PRODUCT_ID" => $arResult["ID"])
	); ?>
</div>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		const tabs = document.querySelectorAll('.card__tabs-button');
		const tabContent = document.querySelectorAll('.card__tabs-content');

		const section = document.querySelector('.section.suggest.nav-section');
		if (section) {
			section.classList.add('card-page');
		}

		tabs.forEach(tab => {
			tab.addEventListener('click', function() {
				const targetId = this.dataset.tab;
				tabs.forEach(t => t.classList.remove('card__tabs-button--active'));
				tabContent.forEach(content => content.classList.remove('card__tabs-content--active'));
				this.classList.add('card__tabs-button--active');
				document.getElementById(targetId).classList.add('card__tabs-content--active');
			});
		});

		const modal = document.getElementById('modal');
		const modalSwiperWrapper = modal.querySelector('.modal-swiper-wrapper');
		const modalTriggers = document.querySelectorAll('.modal-trigger');
		const closeButton = document.querySelector('.close-button');
		let modalSwiper;
		let productSwiper;

		function initializeSwiper(initialIndex, container) {
			const swiper = new Swiper(container, {
				slidesPerView: 1,
				loop: true,
				pagination: {
					el: container + ' .swiper-pagination',
					clickable: true, // Делает точки пагинации кликабельными
				},
				navigation: {
					nextEl: container + ' .swiper-button-next',
					prevEl: container + ' .swiper-button-prev',
				},
				initialSlide: initialIndex,
			});
			return swiper;
		}

		productSwiper = initializeSwiper(0, '#productSwiper');

		modalTriggers.forEach(function(trigger, index) {
			trigger.addEventListener('click', function(e) {
				e.preventDefault();
				modal.style.display = 'block';
				const images = document.querySelectorAll('.card__image .swiper-slide img');
				modalSwiperWrapper.innerHTML = '';
				images.forEach(image => {
					const slide = document.createElement('div');
					slide.classList.add('swiper-slide');

					const img = document.createElement('img');
					img.src = image.src;
					img.alt = image.alt;
					img.id = 'modal-image';

					slide.appendChild(img);
					modalSwiperWrapper.appendChild(slide);
				});
				modalSwiper = initializeSwiper(index, '.swiper-container');
			});
		});

		closeButton.addEventListener('click', function() {
			modal.style.display = 'none';
			if (modalSwiper) {
				modalSwiper.destroy();
				modalSwiper = null;
			}
		});

		window.addEventListener('click', function(event) {
			if (event.target === modal) {
				modal.style.display = 'none';
				if (modalSwiper) {
					modalSwiper.destroy();
					modalSwiper = null;
				}
			}
		});


		// ПЕРЕНОСИМ ОБРАТНУЮ СВЯЗЬ ЗА MAIN

		function movePortalOutsideMain() {
			const portalElement = document.querySelector('.portal');
			if (!portalElement) {
				console.warn("Элемент с классом 'portal portal--visible' не найден внутри div.");
				return;
			}

			const mainElement = document.querySelector('main');
			if (!mainElement) {
				console.warn("Элемент 'main' не найден.");
				return;
			}

			const parentDiv = portalElement.parentNode;
			if (!parentDiv) {
				console.warn("Родительский элемент для portal не найден.")
				return;
			}
			mainElement.parentNode.insertBefore(portalElement, mainElement.nextSibling);

			if (parentDiv.childNodes.length <= parentDiv.innerHTML.trim().length) {
				parentDiv.remove();
			}

			console.log("Элемент portal успешно перемещен за пределы main.");
		}
		movePortalOutsideMain();
	});
</script>
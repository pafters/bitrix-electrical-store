<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Planar");
?>
<main class="main-planar">
	<div class="header__wrapper header header-planar ">
		<div class="container">
			<div class="header__content">
				<div class="header__info">
					<h1 data-sal-duration="900" data-sal-delay="200" data-sal="slide-up" class="circle header__title">
						<? $APPLICATION->IncludeComponent(
							"bitrix:main.include",
							".default",
							array(
								"AREA_FILE_SHOW" => "file",
								"AREA_FILE_SUFFIX" => "inc",
								"EDIT_TEMPLATE" => "",
								"PATH" => "local/include/main/header__title.php",
								"COMPONENT_TEMPLATE" => ".default"
							),
							false
						); ?></h1>
					<p data-sal-duration="900" data-sal-delay="400" data-sal="slide-up" class="header__text">
						<? $APPLICATION->IncludeComponent(
							"bitrix:main.include",
							".default",
							array(
								"AREA_FILE_SHOW" => "file",
								"AREA_FILE_SUFFIX" => "inc",
								"EDIT_TEMPLATE" => "",
								"PATH" => "local/include/main/header__text.php",
								"COMPONENT_TEMPLATE" => ".default"
							),
							false
						); ?></p>

					<div data-sal="slide-up" data-sal-duration="900" data-sal-delay="300" class="section__button sal-animate">
						<button data-ripple-color="light" class="button button--ripple button--partner">Стать партнером</button>
					</div>
				</div>
				<div data-sal-duration="1200" data-sal-delay="150" data-sal="slide-left" class="header__background">
					<svg class="planar_svg" viewBox="0 0 1328 711" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<g id="Picture">
							<g id="Group 73">
								<g id="Group 71">
									<g id="mini_CPU">
										<rect id="Rectangle 2.24" x="189.5" y="602" width="24" height="12" rx="4" transform="rotate(90 189.5 602)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.25" x="229.5" y="602" width="24" height="12" rx="4" transform="rotate(90 229.5 602)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.26" x="155.5" y="541" width="24" height="12" rx="4" transform="rotate(-180 155.5 541)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.27" x="155.5" y="581" width="24" height="12" rx="4" transform="rotate(-180 155.5 581)" fill="#141A2B"></rect>
										<rect id="Rectangle 3" x="163.5" y="514" width="80" height="80" rx="8" fill="#141A2B"></rect>
										<g id="Rectangle 3_2" filter="url(#filter0_dd)">
											<rect x="175.5" y="526" width="56" height="56" rx="8" fill="#0A1021"></rect>
										</g>
									</g>
									<g id="Group 70">
										<path id="Vector 2" d="M131.5 575H101.157C100.096 575 99.0786 575.421 98.3284 576.172L64.6716 609.828C63.9214 610.579 63.5 611.596 63.5 612.657V669.843C63.5 670.904 63.9214 671.921 64.6716 672.672L101.5 709.5" stroke="#141A2B"></path>
										<path id="Vector 2_2" d="M183.5 626V670.343C183.5 671.404 183.921 672.421 184.672 673.172L209 697.5" stroke="#141A2B"></path>
										<path id="Vector 2_3" d="M223.5 626V669.343C223.5 670.404 223.921 671.421 224.672 672.172L237.328 684.828C238.079 685.579 239.096 686 240.157 686H281.367C282.414 686 283.419 686.41 284.166 687.143L307.5 710" stroke="#141A2B"></path>
										<path id="Vector 2_4" d="M131.5 535H80H65.6569C64.596 535 63.5786 535.421 62.8284 536.172L2.17157 596.828C1.42143 597.579 1 598.596 1 599.657V710" stroke="#141A2B"></path>
										<circle id="Ellipse" cx="211" cy="700" r="3" stroke="#141A2B" stroke-width="2"></circle>
									</g>
								</g>
								<g id="Group 69">
									<path id="Vector" d="M307.5 466.5L347.828 506.828C348.579 507.579 349 508.596 349 509.657V589.5V636.5" stroke="#141A2B"></path>
									<path id="Vector 2_5" d="M384.5 564.5V480.157C384.5 479.096 384.079 478.079 383.328 477.328L343.672 437.672C342.921 436.921 342.5 435.904 342.5 434.843V405.5" stroke="#141A2B"></path>
									<circle id="Ellipse_2" cx="385" cy="568" r="3" stroke="#141A2B" stroke-width="2"></circle>
									<circle id="Ellipse_3" cx="349" cy="640" r="3" stroke="#141A2B" stroke-width="2"></circle>
									<circle id="Ellipse_4" cx="305" cy="465" r="3" stroke="#141A2B" stroke-width="2"></circle>
									<circle id="Ellipse_5" cx="342" cy="402" r="3" stroke="#141A2B" stroke-width="2"></circle>
								</g>
								<g id="Group 72">
									<path id="Vector 3" d="M225.5 37H142.157C141.096 37 140.079 37.4214 139.328 38.1716L103.672 73.8284C102.921 74.5786 101.904 75 100.843 75H39.5M184.5 92H255.843C256.904 92 257.921 91.5786 258.672 90.8284L306 43.5" stroke="#141A2B"></path>
									<circle id="Ellipse_6" cx="180" cy="92" r="3" stroke="#141A2B" stroke-width="2"></circle>
									<circle id="Ellipse_7" cx="309" cy="41" r="3" stroke="#141A2B" stroke-width="2"></circle>
									<circle id="Ellipse_8" cx="229" cy="37" r="3" stroke="#141A2B" stroke-width="2"></circle>
									<circle id="Ellipse_9" cx="36" cy="75" r="3" stroke="#141A2B" stroke-width="2"></circle>
								</g>
								<g id="points_element1">
									<circle id="Ellipse_10" cx="448.85" cy="71.65" r="3.15" transform="rotate(90 448.85 71.65)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_11" cx="448.85" cy="85.6002" r="3.15" transform="rotate(90 448.85 85.6002)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_12" cx="448.85" cy="99.5499" r="3.15" transform="rotate(90 448.85 99.5499)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_13" cx="448.85" cy="113.5" r="3.15" transform="rotate(90 448.85 113.5)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_14" cx="448.85" cy="127.45" r="3.15" transform="rotate(90 448.85 127.45)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_15" cx="448.85" cy="141.4" r="3.15" transform="rotate(90 448.85 141.4)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_16" cx="448.85" cy="155.35" r="3.15" transform="rotate(90 448.85 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_17" cx="365.15" cy="71.65" r="3.15" transform="rotate(90 365.15 71.65)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_18" cx="365.15" cy="85.6002" r="3.15" transform="rotate(90 365.15 85.6002)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_19" cx="365.15" cy="99.5499" r="3.15" transform="rotate(90 365.15 99.5499)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_20" cx="365.15" cy="113.5" r="3.15" transform="rotate(90 365.15 113.5)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_21" cx="365.15" cy="127.45" r="3.15" transform="rotate(90 365.15 127.45)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_22" cx="365.15" cy="141.4" r="3.15" transform="rotate(90 365.15 141.4)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_23" cx="365.15" cy="155.35" r="3.15" transform="rotate(90 365.15 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_24" cx="434.9" cy="155.35" r="3.15" transform="rotate(-180 434.9 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_25" cx="420.95" cy="155.35" r="3.15" transform="rotate(-180 420.95 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_26" cx="407" cy="155.35" r="3.15" transform="rotate(-180 407 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_27" cx="393.05" cy="155.35" r="3.15" transform="rotate(-180 393.05 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_28" cx="379.1" cy="155.35" r="3.15" transform="rotate(-180 379.1 155.35)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_29" cx="434.9" cy="71.6498" r="3.15" transform="rotate(-180 434.9 71.6498)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_30" cx="420.95" cy="71.6498" r="3.15" transform="rotate(-180 420.95 71.6498)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_31" cx="407" cy="71.6498" r="3.15" transform="rotate(-180 407 71.6498)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_32" cx="393.05" cy="71.6498" r="3.15" transform="rotate(-180 393.05 71.6498)" stroke="#141A2B" stroke-width="3"></circle>
									<circle id="Ellipse_33" cx="379.1" cy="71.6498" r="3.15" transform="rotate(-180 379.1 71.6498)" stroke="#141A2B" stroke-width="3"></circle>
								</g>
							</g>
							<g id="Group 79">
								<g id="Group 78">
									<g id="Group 58">
										<path id="Vector_2" d="M1068.53 212.758H1126.04C1127.1 212.758 1128.12 212.337 1128.87 211.588L1174.49 166M1067.21 244.077H1182M1065.88 276.278H1128.69C1129.75 276.278 1130.76 275.857 1131.51 275.108L1146.39 260.245C1147.14 259.496 1148.16 259.075 1149.22 259.075H1170.08M1065 308.039H1119.42C1120.48 308.039 1121.49 308.459 1122.24 309.209L1135.35 322.307C1136.1 323.057 1137.12 323.478 1138.18 323.478H1162.68C1163.74 323.478 1164.76 323.057 1165.51 322.307L1182 305.833M1065 339.799H1097.89H1129.2C1130.22 339.799 1131.2 340.186 1131.94 340.881L1147 355L1163 370M1065 372H1137.41" stroke="#141A2B"></path>
										<circle id="Ellipse_34" cx="1185" cy="303" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_35" cx="1166" cy="372" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_36" cx="1141.5" cy="372" r="3" stroke="#141A2B" stroke-width="2"></circle>
									</g>
									<g id="Group 66">
										<rect id="Rectangle 2.1" x="1047.18" y="238.21" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.2" x="1047.18" y="270.184" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.3" x="1047.18" y="302.158" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.4" x="1047.18" y="334.131" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.5" x="1047.18" y="366.105" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
									</g>
								</g>
								<g id="Group 76">
									<g id="Group 57">
										<path id="Vector 2_6" d="M798.744 308H581.307C580.158 308 579.065 308.494 578.306 309.355L491.499 407.866C490.855 408.597 490.5 409.537 490.5 410.511V533.333C490.5 534.4 490.074 535.422 489.317 536.174L431.183 593.826C430.426 594.578 430 595.6 430 596.667V628.5" stroke="#141A2B"></path>
										<path id="Vector 2_7" opacity="0.5" d="M799 339.5H610.337C609.171 339.5 608.063 340.009 607.303 340.893L554.466 402.376C553.843 403.101 553.5 404.026 553.5 404.983V508.971C553.5 509.956 553.863 510.906 554.52 511.639L600.5 563" stroke="#323232"></path>
										<g id="Group 2">
											<path id="Vector 4" d="M799 244H561.494C560.238 244 559.056 243.41 558.3 242.407L534.306 210.569C533.783 209.875 533.5 209.03 533.5 208.162V141.5" stroke="#141A2B"></path>
											<circle id="Ellipse_37" cx="533" cy="137" r="3" stroke="#141A2B" stroke-width="2"></circle>
										</g>
										<g id="Group">
											<path id="Vector 3_2" d="M798.83 276H650.5" stroke="#141A2B"></path>
											<circle id="Ellipse_38" cx="646.5" cy="276" r="3" stroke="#141A2B" stroke-width="2"></circle>
										</g>
										<circle id="Ellipse_39" cx="430" cy="632" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_40" cx="603" cy="565" r="3" stroke="#141A2B" stroke-width="2"></circle>
									</g>
									<g id="Group 67">
										<rect id="Rectangle 2.7" x="798.5" y="238.21" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.8" x="798.5" y="270.184" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.9" x="798.5" y="302.158" width="21.3158" height="10.6579" rx="4" fill="#141A2B"></rect>
										<rect id="Rectangle 2.24_2" x="799" y="334" width="21" height="11" rx="4" fill="#141A2B"></rect>
									</g>
								</g>
								<g id="Group 75">
									<g id="Group 56">
										<g id="Group 54">
											<path id="Vector 2_8" d="M885.5 426V494.427C885.5 495.438 885.117 496.411 884.429 497.152L867.022 515.864C866.333 516.604 865.95 517.578 865.95 518.589V601.97C865.95 602.997 865.556 603.985 864.847 604.728L836.5 634.5" stroke="#141A2B"></path>
											<path id="Vector 2.1" d="M853.5 426V460.962C853.5 461.952 853.133 462.907 852.47 463.642L835 483.001" stroke="#141A2B"></path>
											<path id="Vector 2_9" d="M932 660.504L918.56 645.938C917.879 645.199 917.5 644.231 917.5 643.226V426" stroke="#141A2B"></path>
											<path id="Vector 2_10" d="M949.5 426V537" stroke="#141A2B"></path>
											<path id="Vector 2_11" d="M981.5 426V500.888C981.5 502.091 982.042 503.231 982.975 503.99L996.5 515.001" stroke="#141A2B"></path>
										</g>
										<g id="Group 55">
											<circle id="Ellipse_41" cx="834" cy="484" r="3" stroke="#141A2B" stroke-width="2"></circle>
											<circle id="Ellipse_42" cx="834" cy="636" r="3" stroke="#141A2B" stroke-width="2"></circle>
											<circle id="Ellipse_43" cx="935" cy="663" r="3" stroke="#141A2B" stroke-width="2"></circle>
											<circle id="Ellipse_44" cx="949.5" cy="541" r="3" stroke="#141A2B" stroke-width="2"></circle>
											<circle id="Ellipse_45" cx="999" cy="517" r="3" stroke="#141A2B" stroke-width="2"></circle>
										</g>
									</g>
									<g id="Group 65">
										<rect id="Rectangle 2.13" x="987" y="405" width="21" height="11" rx="4" transform="rotate(90 987 405)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.14" x="955" y="405" width="21" height="11" rx="4" transform="rotate(90 955 405)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.15" x="923" y="405" width="21" height="11" rx="4" transform="rotate(90 923 405)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.16" x="891" y="405" width="21" height="11" rx="4" transform="rotate(90 891 405)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.17" x="859" y="405" width="21" height="11" rx="4" transform="rotate(90 859 405)" fill="#141A2B"></rect>
									</g>
								</g>
								<g id="Group 77">
									<g id="Group 63">
										<path id="Vector_3" d="M853.5 157V107.035C853.5 106.047 853.134 105.094 852.473 104.359L823.027 71.6409C822.366 70.9064 822 69.9532 822 68.9651V44.0633M885.5 157.5V106.197C885.5 105.113 885.059 104.074 884.279 103.321L860.263 80.116C859.483 79.3623 859.042 78.3241 859.042 77.2394V36.3854C859.042 35.3164 858.614 34.2919 857.854 33.5404L831 7M917.5 157V39.6518C917.5 38.5939 917.081 37.5791 916.335 36.8295L885.319 5.68018M949.5 158V109.666C949.5 108.904 949.717 108.159 950.126 107.517L964.861 84.3868C965.27 83.7446 965.487 82.9991 965.487 82.2377V14.1672M981.521 157.107V122.132C981.521 121.073 981.941 120.057 982.688 119.308L999.95 101.995C1000.7 101.245 1001.12 100.23 1001.12 99.1709V58.2558C1001.12 57.197 1001.54 56.1813 1002.29 55.4315L1046.99 10.5937M1013.5 157V113.975C1013.5 112.913 1013.92 111.894 1014.68 111.143L1049.82 76.0887C1050.58 75.3383 1051 74.3192 1051 73.2565V37.8416" stroke="#141A2B"></path>
										<circle id="Ellipse_46" cx="822" cy="40" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_47" cx="829" cy="4" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_48" cx="883" cy="4" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_49" cx="966" cy="10" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_50" cx="1049" cy="8" r="3" stroke="#141A2B" stroke-width="2"></circle>
										<circle id="Ellipse_51" cx="1051" cy="34" r="3" stroke="#141A2B" stroke-width="2"></circle>
									</g>
									<g id="Group 68">
										<rect id="Rectangle 2.18" x="1019" y="157" width="21" height="11" rx="4" transform="rotate(90 1019 157)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.19" x="987" y="157" width="21" height="11" rx="4" transform="rotate(90 987 157)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.20" x="955" y="157" width="21" height="11" rx="4" transform="rotate(90 955 157)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.21" x="923" y="157" width="21" height="11" rx="4" transform="rotate(90 923 157)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.22" x="891" y="157" width="21" height="11" rx="4" transform="rotate(90 891 157)" fill="#141A2B"></rect>
										<rect id="Rectangle 2.23" x="859" y="157" width="21" height="11" rx="4" transform="rotate(90 859 157)" fill="#141A2B"></rect>
									</g>
								</g>
								<g id="Group 64">
									<rect id="Rectangle" x="826.921" y="184.921" width="213.158" height="213.158" rx="24" fill="#141A2B"></rect>
									<g id="Rectangle_2" filter="url(#filter1_dd)">
										<rect x="850.013" y="208.013" width="166.974" height="166.974" rx="24" fill="#141A2B"></rect>
									</g>
									<g id="logo_CPU">
										<g id="Vector_4">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M879.732 324.365H883.471V332H886.275V321.965H877V332H879.732V324.365Z" fill="white"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M909.283 332L905.328 321.965H901.805L897.851 332H900.799L903.531 324.365L906.335 332H909.283Z" fill="white"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M923.735 330.182H927.905L928.552 332H931.5L927.545 321.893H923.95L919.996 332H922.944L923.735 330.182ZM927.042 327.71H924.597L925.82 324.365L927.042 327.71Z" fill="white"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M946.455 328.219H950.193V332H952.926V321.965H950.193V325.747H946.455V321.965H943.651V332H946.455V328.219Z" fill="white"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M968.672 330.182H972.842L973.489 332H976.437L972.482 321.893H968.887L964.933 332H967.881L968.672 330.182ZM971.979 327.71H969.534L970.757 324.365L971.979 327.71Z" fill="white"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M991.176 329.164H993.405C995.418 329.164 997 327.564 997 325.528C997 323.492 995.418 321.893 993.405 321.893H988.444V332H991.176V329.164ZM991.176 324.365H993.046C993.693 324.365 994.196 324.874 994.196 325.528C994.196 326.183 993.693 326.692 993.046 326.692H991.176V324.365Z" fill="white"></path>
										</g>
										<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M943.247 254.253C941.125 253.693 938.911 253.413 936.604 253.413C925.347 253.413 915.751 260.968 912.429 271.227C909.661 273.465 908 276.077 908 278.968C908 286.989 920.826 293.424 936.604 293.424C952.382 293.424 965.208 286.989 965.208 278.968C965.208 276.17 963.639 273.465 960.779 271.227C959.303 266.657 956.719 262.74 953.213 259.662C954.135 257.051 953.028 253.973 950.445 252.667C947.953 251.362 944.908 252.015 943.247 254.253ZM914.182 282.512C915.474 284.657 918.058 286.616 921.472 288.015C914.459 285.963 909.753 282.512 909.753 278.688C909.753 277.009 910.676 275.331 912.337 273.838C911.137 275.144 910.491 276.543 910.491 278.035C910.491 279.434 911.045 280.74 912.06 281.953C911.506 281.02 911.229 280.087 911.229 279.155C911.229 274.678 917.227 270.854 925.808 269.082C925.347 269.921 924.978 270.947 924.793 271.88H928.055C927.863 271.78 927.668 271.685 927.469 271.596C929.96 270.477 931.898 268.518 933.005 266C934.112 268.518 936.142 270.477 938.541 271.596C938.343 271.685 938.147 271.78 937.955 271.88H948.507C948.322 270.947 947.953 270.015 947.492 269.082C956.073 270.854 962.071 274.678 962.071 279.155C962.071 280.087 961.794 281.02 961.24 281.953C962.255 280.74 962.809 279.434 962.809 278.035C962.809 276.543 962.163 275.144 960.963 273.838C962.624 275.237 963.547 276.916 963.547 278.688C963.547 282.512 958.933 285.963 951.829 288.015C955.15 286.616 957.734 284.75 959.118 282.512C950.26 291.186 923.04 291.186 914.182 282.512ZM931.403 274.585C932.046 275.363 932.586 276.237 933.005 277.192C933.425 276.237 933.964 275.363 934.607 274.585H948.691C948.691 275.517 948.599 276.45 948.415 277.383H924.793C924.609 276.543 924.516 275.517 924.516 274.585H931.403ZM927.931 283.072C927.1 282.232 926.454 281.3 925.901 280.274H947.584C947.031 281.3 946.385 282.232 945.554 283.072H927.931ZM936.696 286.896C934.389 286.896 932.36 286.336 930.514 285.217H942.878C941.033 286.243 938.911 286.896 936.696 286.896ZM951.367 262.46C953.305 264.139 954.874 266.191 956.073 268.429C950.906 266.004 944.17 264.605 936.696 264.605C929.222 264.605 922.394 266.098 917.319 268.429C921.01 261.434 928.3 256.771 936.696 256.771C938.542 256.771 940.387 256.958 942.14 257.424C941.956 259.662 943.063 261.901 945.185 263.02C947.215 264.139 949.614 263.766 951.367 262.46ZM953.766 293.144C955.612 292.678 957.273 292.118 958.841 291.466C954.505 299.3 946.2 304.709 936.696 304.709C927.192 304.709 918.888 299.393 914.551 291.466C916.028 292.118 917.781 292.678 919.626 293.144C923.686 298.181 929.776 301.352 936.696 301.352C943.524 301.352 949.706 298.181 953.766 293.144ZM945.646 256.678C946.292 255.465 947.769 254.999 948.968 255.652C950.168 256.305 950.629 257.797 949.983 259.009C949.337 260.222 947.861 260.688 946.661 260.035C945.462 259.382 945.001 257.89 945.646 256.678Z" fill="url(#paint0_linear)"></path>
										<path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M933.005 266C931.898 268.518 929.96 270.477 927.469 271.596C929.96 272.715 931.898 274.674 933.005 277.192C934.112 274.674 936.05 272.715 938.541 271.596C936.142 270.477 934.112 268.518 933.005 266Z" fill="white"></path>
									</g>
								</g>
							</g>
							<g id="grey-lines">
								<g id="grey-01">
									<path id="Vector 3.1" d="M799 211.5H752L700 178" stroke="url(#paint1_linear)"></path>
									<rect id="Rectangle 2.25_2" x="799" y="206" width="21" height="11" rx="4" fill="url(#paint2_linear)"></rect>
								</g>
								<g id="grey-02">
									<path id="Vector 2_12" d="M798 371.5H743.382H732.151C731.093 371.5 730.079 371.918 729.33 372.664L637 464.5" stroke="url(#paint3_linear)"></path>
									<rect id="Rectangle 2.29" x="798" y="366" width="24" height="11" rx="4" fill="url(#paint4_linear)"></rect>
								</g>
								<g id="grey-03">
									<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M1012 427C1009.79 427 1008 425.209 1008 423V409C1008 406.791 1009.79 405 1012 405H1015C1017.21 405 1019 406.791 1019 409V423C1019 425.209 1017.21 427 1015 427H1012ZM1014.92 469.604C1013.72 468.763 1013 467.385 1013 465.914V427H1014V465.914C1014 467.058 1014.56 468.13 1015.5 468.784L1088.29 519.59L1087.71 520.41L1014.92 469.604Z" fill="url(#paint5_linear)"></path>
								</g>
								<g id="grey-04">
									<path id="Union_2" fill-rule="evenodd" clip-rule="evenodd" d="M1316 82C1317.1 82 1318 81.1046 1318 80C1318 78.8954 1317.1 78 1316 78C1314.9 78 1314 78.8954 1314 80C1314 81.1046 1314.9 82 1316 82ZM1316 84C1318.21 84 1320 82.2091 1320 80C1320 77.7909 1318.21 76 1316 76C1313.79 76 1312 77.7909 1312 80C1312 80.5293 1312.1 81.0346 1312.29 81.4969L1267.51 126.234C1266.86 126.89 1265.97 127.258 1265.04 127.258H1237.11H1224.02C1222.8 127.258 1221.63 127.752 1220.78 128.628L1191.64 158.729L1192.36 159.425L1221.5 129.323C1222.16 128.642 1223.07 128.258 1224.02 128.258H1237.11H1265.04C1266.23 128.258 1267.38 127.784 1268.22 126.941L1312.8 82.4005C1313.53 83.3718 1314.69 84 1316 84ZM1320.02 159.577H1206.21V158.577H1320.26C1320.83 157.07 1322.29 156 1324 156C1326.21 156 1328 157.791 1328 160C1328 162.209 1326.21 164 1324 164C1321.79 164 1320 162.209 1320 160C1320 159.857 1320.01 159.716 1320.02 159.577ZM1288.22 174.575C1287.29 174.575 1286.4 174.943 1285.74 175.599L1270.87 190.462C1270.02 191.305 1268.88 191.778 1267.69 191.778H1204.88V190.778H1267.69C1268.62 190.778 1269.51 190.41 1270.16 189.754L1285.04 174.892C1285.88 174.049 1287.03 173.575 1288.22 173.575H1309.08V174.204C1309.45 172.376 1311.06 171 1313 171C1315.21 171 1317 172.791 1317 175C1317 177.209 1315.21 179 1313 179C1310.79 179 1309 177.209 1309 175C1309 174.856 1309.01 174.715 1309.02 174.575H1288.22ZM1319.95 222.588L1304.86 237.661C1304.02 238.504 1302.88 238.978 1301.68 238.978H1277.18C1275.99 238.978 1274.84 238.504 1274 237.661L1260.89 224.563C1260.23 223.907 1259.34 223.539 1258.42 223.539H1204V222.539H1258.42C1259.61 222.539 1260.75 223.012 1261.6 223.855L1274.71 236.954C1275.36 237.609 1276.25 237.978 1277.18 237.978H1301.68C1302.61 237.978 1303.5 237.609 1304.16 236.954L1319.39 221.732C1319.14 221.208 1319 220.62 1319 220C1319 217.791 1320.79 216 1323 216C1325.21 216 1327 217.791 1327 220C1327 222.209 1325.21 224 1323 224C1321.78 224 1320.68 223.452 1319.95 222.588ZM1236.89 255.299H1204V254.299H1236.89H1268.2C1269.35 254.299 1270.45 254.734 1271.28 255.516L1286.34 269.635L1302.15 284.454C1302.7 284.164 1303.33 284 1304 284C1306.21 284 1308 285.791 1308 288C1308 290.209 1306.21 292 1304 292C1301.79 292 1300 290.209 1300 288C1300 286.826 1300.51 285.771 1301.31 285.039L1285.66 270.365L1270.6 256.245C1269.95 255.637 1269.09 255.299 1268.2 255.299H1236.89ZM1220.55 286.062L1203.63 267.84L1204.37 267.16L1221.28 285.381C1221.94 286.095 1222.87 286.5 1223.85 286.5H1240.2H1276.29C1276.88 285.034 1278.32 284 1280 284C1282.21 284 1284 285.791 1284 288C1284 290.209 1282.21 292 1280 292C1277.79 292 1276 290.209 1276 288C1276 287.831 1276.01 287.664 1276.03 287.5H1240.2H1223.85C1222.59 287.5 1221.4 286.979 1220.55 286.062ZM1200.55 105.919L1164.64 144.158L1165.36 144.842L1201.28 106.604C1201.94 105.899 1202.87 105.5 1203.83 105.5H1220.2H1255.03C1255.28 107.473 1256.96 109 1259 109C1261.21 109 1263 107.209 1263 105C1263 102.791 1261.21 101 1259 101C1256.96 101 1255.28 102.527 1255.03 104.5H1220.2H1203.83C1202.59 104.5 1201.4 105.014 1200.55 105.919ZM1261 105C1261 106.105 1260.1 107 1259 107C1257.9 107 1257 106.105 1257 105C1257 103.895 1257.9 103 1259 103C1260.1 103 1261 103.895 1261 105ZM1326 160C1326 161.105 1325.1 162 1324 162C1322.9 162 1322 161.105 1322 160C1322 158.895 1322.9 158 1324 158C1325.1 158 1326 158.895 1326 160ZM1313 177C1314.1 177 1315 176.105 1315 175C1315 173.895 1314.1 173 1313 173C1311.9 173 1311 173.895 1311 175C1311 176.105 1311.9 177 1313 177ZM1325 220C1325 221.105 1324.1 222 1323 222C1321.9 222 1321 221.105 1321 220C1321 218.895 1321.9 218 1323 218C1324.1 218 1325 218.895 1325 220ZM1304 290C1305.1 290 1306 289.105 1306 288C1306 286.895 1305.1 286 1304 286C1302.9 286 1302 286.895 1302 288C1302 289.105 1302.9 290 1304 290ZM1282 288C1282 289.105 1281.1 290 1280 290C1278.9 290 1278 289.105 1278 288C1278 286.895 1278.9 286 1280 286C1281.1 286 1282 286.895 1282 288Z" fill="url(#paint6_linear)"></path>
									<rect id="Rectangle 2.26_2" x="1069" y="218" width="22" height="11" rx="4" transform="rotate(-180 1069 218)" fill="url(#paint7_linear)"></rect>
									<path id="Vector 3.2" d="M1169 212.5H1069" stroke="#141A2B"></path>
								</g>
							</g>
							<g id="highlight-lines" class="lazy-line-painter">
								<g id="line-04">
									<g id="highlight-04">
										<g id="Group 54_2">
											<path id="Vector_6" data-llp-delay="4300" data-llp-duration="1000" d="M1192 159.077L1221.14 128.976C1221.9 128.197 1222.93 127.758 1224.02 127.758H1237.11H1265.04C1266.1 127.758 1267.12 127.337 1267.87 126.588L1313.49 81M1206.21 159.077H1321M1204.88 191.278H1267.69C1268.75 191.278 1269.76 190.857 1270.51 190.108L1285.39 175.245C1286.14 174.496 1287.16 174.075 1288.22 174.075H1309.08M1204 223.039H1258.42C1259.48 223.039 1260.49 223.459 1261.24 224.209L1274.35 237.307C1275.1 238.057 1276.12 238.478 1277.18 238.478H1301.68C1302.74 238.478 1303.76 238.057 1304.51 237.307L1321 220.833M1204 254.799H1236.89H1268.2C1269.22 254.799 1270.2 255.186 1270.94 255.881L1286 270L1302 285M1204 267.5L1220.91 285.721C1221.67 286.537 1222.73 287 1223.85 287H1240.2H1276.41" stroke="url(#paint8_linear)" data-llp-id="highlightlines-0" style="stroke-dasharray: 700.219, 700.219; stroke-dashoffset: 700.219;"></path>
											<path id="Vector_7" data-llp-delay="4300" data-llp-duration="0100" d="M1165 144.5L1200.92 106.261C1201.67 105.457 1202.73 105 1203.83 105H1220.2H1256.41" stroke="url(#paint9_linear)" data-llp-id="highlightlines-1" style="stroke-dasharray: 108.306, 108.306; stroke-dashoffset: 108.306;"></path>
											<path id="highlight-circle" data-llp-delay="4500" stroke="url(#paint10_linear)" fill-rule="evenodd" clip-rule="evenodd" d="M1316 82C1317.1 82 1318 81.1046 1318 80C1318 78.8954 1317.1 78 1316 78C1314.9 78 1314 78.8954 1314 80C1314 81.1046 1314.9 82 1316 82ZM1316 84C1318.21 84 1320 82.2091 1320 80C1320 77.7909 1318.21 76 1316 76C1313.79 76 1312 77.7909 1312 80C1312 82.2091 1313.79 84 1316 84ZM1259 107C1260.1 107 1261 106.105 1261 105C1261 103.895 1260.1 103 1259 103C1257.9 103 1257 103.895 1257 105C1257 106.105 1257.9 107 1259 107ZM1259 109C1261.21 109 1263 107.209 1263 105C1263 102.791 1261.21 101 1259 101C1256.79 101 1255 102.791 1255 105C1255 107.209 1256.79 109 1259 109ZM1326 160C1326 161.105 1325.1 162 1324 162C1322.9 162 1322 161.105 1322 160C1322 158.895 1322.9 158 1324 158C1325.1 158 1326 158.895 1326 160ZM1328 160C1328 162.209 1326.21 164 1324 164C1321.79 164 1320 162.209 1320 160C1320 157.791 1321.79 156 1324 156C1326.21 156 1328 157.791 1328 160ZM1313 177C1314.1 177 1315 176.105 1315 175C1315 173.895 1314.1 173 1313 173C1311.9 173 1311 173.895 1311 175C1311 176.105 1311.9 177 1313 177ZM1313 179C1315.21 179 1317 177.209 1317 175C1317 172.791 1315.21 171 1313 171C1310.79 171 1309 172.791 1309 175C1309 177.209 1310.79 179 1313 179ZM1325 220C1325 221.105 1324.1 222 1323 222C1321.9 222 1321 221.105 1321 220C1321 218.895 1321.9 218 1323 218C1324.1 218 1325 218.895 1325 220ZM1327 220C1327 222.209 1325.21 224 1323 224C1320.79 224 1319 222.209 1319 220C1319 217.791 1320.79 216 1323 216C1325.21 216 1327 217.791 1327 220ZM1304 290C1305.1 290 1306 289.105 1306 288C1306 286.895 1305.1 286 1304 286C1302.9 286 1302 286.895 1302 288C1302 289.105 1302.9 290 1304 290ZM1304 292C1306.21 292 1308 290.209 1308 288C1308 285.791 1306.21 284 1304 284C1301.79 284 1300 285.791 1300 288C1300 290.209 1301.79 292 1304 292ZM1282 288C1282 289.105 1281.1 290 1280 290C1278.9 290 1278 289.105 1278 288C1278 286.895 1278.9 286 1280 286C1281.1 286 1282 286.895 1282 288ZM1284 288C1284 290.209 1282.21 292 1280 292C1277.79 292 1276 290.209 1276 288C1276 285.791 1277.79 284 1280 284C1282.21 284 1284 285.791 1284 288Z" data-llp-id="highlightlines-2" data-llp-duration="1000" stroke-dasharray="263.917, 263.917" stroke-dashoffset="263.917"></path>
										</g>
										<path id="transform" data-llp-delay="3500" data-llp-duration="0150" d="M1052 213H1064" stroke="#45B5C8" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-3" stroke-dasharray="12, 12" stroke-dashoffset="12"></path>
										<path id="Vector 4_2" data-llp-delay="3650" data-llp-duration="0200" d="M1069 212.5H1106" stroke="#45B5C8" data-llp-id="highlightlines-4" stroke-dasharray="37, 37" stroke-dashoffset="37"></path>
									</g>
								</g>
								<g id="line-03">
									<g id="highlight-03">
										<path id="Vector 3.3" data-llp-delay="2700" data-llp-duration="0150" d="M1014 410V422" stroke="#45B5C8" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-5" stroke-dasharray="12, 12" stroke-dashoffset="12"></path>
										<path id="Vector 2_13" data-llp-delay="2850" data-llp-duration="0200" d="M1014 427V466C1014.18 467.614 1014.66 468.375 1016 469.5L1072 508.5" stroke="#45B5C8" data-llp-id="highlightlines-6" stroke-dasharray="111.407, 111.407" stroke-dashoffset="111.407"></path>
									</g>
								</g>
								<g id="line-02">
									<g id="highlight-02">
										<path id="Vector 3.2_2" data-llp-delay="1800" data-llp-duration="0150" d="M816 371H804" stroke="#45B5C8" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-7" stroke-dasharray="12, 12" stroke-dashoffset="12"></path>
										<path id="Vector 4_3" data-llp-delay="1950" data-llp-duration="0200" d="M799 371H733C731.69 371.17 731.018 371.449 730 372.5L703 399" stroke="#45B5C8" data-llp-id="highlightlines-8" stroke-dasharray="107.273, 107.273" stroke-dashoffset="107.273"></path>
									</g>
								</g>
								<g id="line-01">
									<g id="highlight-01">
										<path id="Vector 3.1_2" data-llp-delay="1000" data-llp-duration="0150" d="M815 211H804" stroke="#45B5C8" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-9" stroke-dasharray="11, 11" stroke-dashoffset="11"></path>
										<path id="Vector 35" data-llp-delay="1150" data-llp-duration="0200" d="M799 211.5H753.5C752.395 211.513 751.812 211.461 751 211L726 195" stroke="#45B5C8" data-llp-id="highlightlines-10" stroke-dasharray="77.7695, 77.7695" stroke-dashoffset="77.7695"></path>
									</g>
								</g>
								<g id="Group 74">
									<g id="Group 62">
										<g id="IOR">
											<rect id="Rectangle 3.2" x="808" y="110" width="88" height="88" rx="8" transform="rotate(-180 808 110)" fill="#141A2B" data-llp-id="highlightlines-11" data-llp-duration="1000" stroke-dasharray="352, 352" stroke-dashoffset="182.114"></rect>
											<g id="Group 20" opacity="0.8" filter="url(#filter2_dd)">
												<g id="Open_in_new/normal">
													<g id="Shapes/Button">
														<path id="Rectangle 2" d="M733.7 43.2002C733.7 39.0581 737.058 35.7002 741.2 35.7002H786.8C790.942 35.7002 794.3 39.0581 794.3 43.2002V88.8002C794.3 92.9423 790.942 96.3002 786.8 96.3002H741.2C737.058 96.3002 733.7 92.9423 733.7 88.8002V43.2002Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-12" data-llp-duration="1000" stroke-dasharray="229.531, 229.531" stroke-dashoffset="118.752"></path>
													</g>
												</g>
												<rect id="image 10" x="738.578" y="49.3779" width="50.8444" height="33.2444" fill="url(#pattern0)" data-llp-id="highlightlines-13" data-llp-duration="1000" stroke-dasharray="168.178, 168.178" stroke-dashoffset="87.01"></rect>
											</g>
										</g>
										<g id="IOR_2">
											<rect id="Rectangle 3.2_2" x="606" y="106" width="120" height="120" rx="8" fill="#141A2B" data-llp-id="highlightlines-14" data-llp-duration="1000" stroke-dasharray="480, 480" stroke-dashoffset="248.338"></rect>
											<g id="Group 20_2" opacity="0.8" filter="url(#filter3_dd)">
												<g id="Open_in_new/normal_2">
													<g id="Shapes/Button_2">
														<path id="Rectangle 2_2" d="M624.5 132C624.5 127.858 627.858 124.5 632 124.5H700C704.142 124.5 707.5 127.858 707.5 132V200C707.5 204.142 704.142 207.5 700 207.5H632C627.858 207.5 624.5 204.142 624.5 200V132Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-15" data-llp-duration="1000" stroke-dasharray="319.131, 319.131" stroke-dashoffset="165.109"></path>
													</g>
												</g>
												<rect id="image 10_2" x="631.333" y="143.333" width="69.3333" height="45.3333" fill="url(#pattern1)" data-llp-id="highlightlines-16" data-llp-duration="1000" stroke-dasharray="229.333, 229.333" stroke-dashoffset="118.65"></rect>
											</g>
										</g>
									</g>
									<g id="Group 59">
										<g id="Interconnect">
											<rect id="Rectangle 3.2_3" x="1106" y="144" width="124" height="124" rx="8" fill="#141A2B" data-llp-id="highlightlines-17" data-llp-duration="1000" stroke-dasharray="496, 496" stroke-dashoffset="252.616"></rect>
											<g id="Group 20_3" opacity="0.8" filter="url(#filter4_dd)">
												<g id="Open_in_new/normal_3">
													<g id="Shapes/Button_3">
														<path id="Rectangle 2_3" d="M1125.1 170.6C1125.1 166.458 1128.46 163.1 1132.6 163.1H1203.4C1207.54 163.1 1210.9 166.458 1210.9 170.6V241.4C1210.9 245.542 1207.54 248.9 1203.4 248.9H1132.6C1128.46 248.9 1125.1 245.542 1125.1 241.4V170.6Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-18" data-llp-duration="1000" stroke-dasharray="330.329, 330.329" stroke-dashoffset="170.902"></path>
													</g>
												</g>
												<rect id="image 10_3" x="1132.18" y="182.578" width="71.6444" height="46.8444" fill="url(#pattern2)" data-llp-id="highlightlines-19" data-llp-duration="1000" stroke-dasharray="236.978, 236.978" stroke-dashoffset="122.605"></rect>
											</g>
										</g>
									</g>
									<g id="Group 60">
										<g id="Interconnect_2">
											<rect id="Rectangle 3.2_4" x="990" y="544" width="88" height="88" rx="8" fill="#141A2B" data-llp-id="highlightlines-20" data-llp-duration="1000" stroke-dasharray="352, 352" stroke-dashoffset="182.114"></rect>
											<g id="Group 20_4" opacity="0.8" filter="url(#filter5_dd)">
												<g id="Open_in_new/normal_4">
													<g id="Shapes/Button_4">
														<path id="Rectangle 2_4" d="M1003.7 565.2C1003.7 561.058 1007.06 557.7 1011.2 557.7H1056.8C1060.94 557.7 1064.3 561.058 1064.3 565.2V610.8C1064.3 614.942 1060.94 618.3 1056.8 618.3H1011.2C1007.06 618.3 1003.7 614.942 1003.7 610.8V565.2Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-21" data-llp-duration="1000" stroke-dasharray="229.529, 229.529" stroke-dashoffset=" 118.751"></path>
													</g>
												</g>
												<rect id="image 10_4" x="1008.58" y="571.378" width="50.8444" height="33.2444" fill="url(#pattern3)" data-llp-id="highlightlines-22" data-llp-duration="1000" stroke-dasharray="168.178, 168.178" stroke-dashoffset="87.01"></rect>
											</g>
										</g>
										<g id="Renesas">
											<rect id="Rectangle 3.2_5" x="1072" y="428" width="120" height="120" rx="8" fill="#141A2B" data-llp-id="highlightlines-23" data-llp-duration="1000" stroke-dasharray="480, 480" stroke-dashoffset="248.338"></rect>
											<g id="Group 20_5" opacity="0.8" filter="url(#filter6_dd)">
												<g id="Open_in_new/normal_5">
													<g id="Shapes/Button_5">
														<path id="Rectangle 2_5" d="M1090.5 454C1090.5 449.858 1093.86 446.5 1098 446.5H1166C1170.14 446.5 1173.5 449.858 1173.5 454V522C1173.5 526.142 1170.14 529.5 1166 529.5H1098C1093.86 529.5 1090.5 526.142 1090.5 522V454Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-24" data-llp-duration="1000" stroke-dasharray="319.129, 319.129" stroke-dashoffset=" 165.108"></path>
													</g>
												</g>
												<rect id="image 10_5" x="1097.33" y="465.333" width="69.3333" height="45.3333" fill="url(#pattern4)" data-llp-id="highlightlines-25" data-llp-duration="1000" stroke-dasharray="229.333, 229.333" stroke-dashoffset="118.65"></rect>
											</g>
										</g>
									</g>
									<g id="Group 61">
										<g id="IOR_3">
											<rect id="Rectangle 3.2_6" x="610" y="399" width="120" height="120" rx="8" fill="#141A2B" data-llp-id="highlightlines-26" data-llp-duration="1000" stroke-dasharray="480, 480" stroke-dashoffset="248.338"></rect>
											<g id="Group 20_6" opacity="0.8" filter="url(#filter7_dd)">
												<g id="Open_in_new/normal_6">
													<g id="Shapes/Button_6">
														<path id="Rectangle 2_6" d="M628.5 425C628.5 420.858 631.858 417.5 636 417.5H704C708.142 417.5 711.5 420.858 711.5 425V493C711.5 497.142 708.142 500.5 704 500.5H636C631.858 500.5 628.5 497.142 628.5 493V425Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-27" data-llp-duration="1000" stroke-dasharray="319.131, 319.131" stroke-dashoffset=" 165.109"></path>
													</g>
												</g>
												<rect id="image 10_6" x="635.333" y="436.333" width="69.3333" height="45.3333" fill="url(#pattern5)" data-llp-id="highlightlines-28" data-llp-duration="1000" stroke-dasharray="229.333, 229.333" stroke-dashoffset="118.65"></rect>
											</g>
										</g>
										<g id="Infineon">
											<rect id="Rectangle 3.2_7" x="726" y="514" width="88" height="88" rx="8" fill="#141A2B" data-llp-id="highlightlines-29" data-llp-duration="1000" stroke-dasharray="352, 352" stroke-dashoffset="182.114"></rect>
											<g id="Group 20_7" opacity="0.8" filter="url(#filter8_dd)">
												<g id="Open_in_new/normal_7">
													<g id="Shapes/Button_7">
														<path id="Rectangle 2_7" d="M739.7 535.2C739.7 531.058 743.058 527.7 747.2 527.7H792.8C796.942 527.7 800.3 531.058 800.3 535.2V580.8C800.3 584.942 796.942 588.3 792.8 588.3H747.2C743.058 588.3 739.7 584.942 739.7 580.8V535.2Z" fill="white" stroke="#C9CFE6" data-llp-id="highlightlines-30" data-llp-duration="1000" stroke-dasharray="229.53, 229.53" stroke-dashoffset="118.752"></path>
													</g>
												</g>
												<rect id="image 10_7" x="744.578" y="541.378" width="50.8444" height="33.2444" fill="url(#pattern6)" data-llp-id="highlightlines-31" data-llp-duration="1000" stroke-dasharray="168.178, 168.178" stroke-dashoffset=" 87.01"></rect>
											</g>
										</g>
									</g>
								</g>
								<g id="highlight-box">
									<path id="05" data-llp-delay="0300" data-llp-duration="0700" d="M1040 207V376C1039.4 382.041 1038.29 385.166 1034 390C1029.22 394.915 1025.68 396.596 1018 398H849C842.203 397.129 838.847 395.745 834 391C829.7 386.965 828.408 383.68 827 377V206C827.887 200.233 829.122 197.118 834 192C838.615 187.519 841.986 186.109 849 185H1018C1025.28 186.244 1028.83 187.895 1034 193C1038 197.744 1039.38 200.817 1040 207Z" stroke="#45B5C8" data-llp-id="highlightlines-32" stroke-dasharray="811.45, 811.45" stroke-dashoffset=" 599.743"></path>
									<g id="04">
										<path id="Vector_8" data-llp-delay="3800" data-llp-duration="0500" d="M1114.27 144L1221.72 144C1224.19 144.095 1225.41 144.629 1227.41 146.067C1229.38 147.928 1229.82 149.358 1229.99 152.267V259.733C1230.08 262.484 1229.57 263.864 1227.41 265.933C1225.47 267.384 1224.11 267.682 1221.58 268H1114.27C1111.62 267.839 1110.22 267.41 1108.07 265.417C1106.67 263.942 1106.34 262.535 1106 259.733V152.267C1106.3 149.713 1106.66 148.373 1108.58 146.583C1110.41 144.626 1111.69 144.152 1114.27 144Z" stroke="#45B5C8" data-llp-id="highlightlines-33" stroke-dasharray="482.024, 482.024" stroke-dashoffset=" 482.024"></path>
									</g>
									<g id="03">
										<path id="Vector_9" data-llp-delay="3100" data-llp-duration="0500" d="M1192 436V540C1191.91 542.389 1191.39 543.568 1190 545.5C1188.2 547.405 1186.82 547.833 1184 548H1080C1077.34 548.089 1076 547.593 1074 545.5C1072.6 543.622 1072.31 542.309 1072 539.858V436C1072.16 433.437 1072.57 432.084 1074.5 430C1075.93 428.644 1077.29 428.332 1080 428H1184C1186.47 428.292 1187.77 428.643 1189.5 430.5C1191.39 432.271 1191.85 433.512 1192 436Z" stroke="#45B5C8" data-llp-id="highlightlines-34" stroke-dasharray="466.488, 466.488" stroke-dashoffset=" 466.488"></path>
										<path id="Vector_10" data-llp-delay="3300" data-llp-duration="0700" d="M990 625V551C990.205 549.081 990.698 548.111 992 546.5C993.743 545.052 994.858 544.55 997 544H1071C1072.7 544.276 1073.57 544.75 1075 546C1076.9 547.791 1077.37 549.007 1078 551.242V625C1077.62 626.99 1077.15 628.094 1075.5 630C1074.06 631.243 1073.04 631.641 1071 632H997C997 632 993.692 630.668 992 629C990.612 627.438 990.363 626.61 990 625Z" stroke="#45B5C8" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-35" stroke-dasharray="338.194, 338.194" stroke-dashoffset=" 338.194"></path>
									</g>
									<g id="02">
										<path id="Vector_11" data-llp-delay="2400" data-llp-duration="700" d="M726 595V521C726.205 519.081 726.698 518.111 728 516.5C729.743 515.052 730.858 514.55 733 514H807C808.705 514.276 809.566 514.75 811 516C812.9 517.791 813.367 519.007 814 521.242V595C813.624 596.99 813.152 598.094 811.5 600C810.058 601.243 809.045 601.641 807 602H733C733 602 729.692 600.668 728 599C726.612 597.438 726.363 596.61 726 595Z" stroke="#45B5C8" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-36" stroke-dasharray="338.195, 338.195" stroke-dashoffset=" 338.195"></path>
										<path id="Vector_12" data-llp-delay="2200" data-llp-duration="500" d="M730 407V511C729.908 513.389 729.391 514.568 728 516.5C726.198 518.405 724.815 518.833 722 519H618C615.338 519.089 614.003 518.593 612 516.5C610.596 514.622 610.308 513.309 610 510.858V407C610.156 404.437 610.571 403.084 612.5 401C613.927 399.644 615.289 399.332 618 399H722C724.471 399.292 725.768 399.643 727.5 401.5C729.394 403.271 729.853 404.512 730 407Z" stroke="#45B5C8" data-llp-id="highlightlines-37" stroke-dasharray="466.49, 466.49" stroke-dashoffset=" 466.49"></path>
									</g>
									<g id="01">
										<path id="Vector_13" data-llp-delay="1400" data-llp-duration="0500" d="M726 114V218C725.908 220.389 725.391 221.568 724 223.5C722.198 225.405 720.815 225.833 718 226H614C611.338 226.089 610.003 225.593 608 223.5C606.596 221.622 606.308 220.309 606 217.858V114C606.156 111.437 606.571 110.084 608.5 108C609.927 106.644 611.289 106.332 614 106H718C720.471 106.292 721.768 106.643 723.5 108.5C725.394 110.271 725.853 111.512 726 114Z" stroke="#45B5C8" data-llp-id="highlightlines-38" stroke-dasharray="466.49, 466.49" stroke-dashoffset=" 466.49"></path>
										<path id="Vector_14" data-llp-delay="1800" data-llp-duration="0500" d="M720 103V29C720.205 27.0812 720.698 26.1114 722 24.5C723.743 23.0525 724.858 22.5496 727 22L801 22C802.705 22.2759 803.566 22.7496 805 24C806.9 25.7905 807.367 27.0065 808 29.242V103C807.624 104.99 807.152 106.094 805.5 108C804.058 109.243 803.045 109.641 801 110L727 110C727 110 723.692 108.668 722 107C720.612 105.438 720.363 104.61 720 103Z" stroke="#45B5C8" stroke-linecap="round" stroke-linejoin="round" data-llp-id="highlightlines-39" stroke-dasharray="338.195, 338.195" stroke-dashoffset=" 338.195"></path>
									</g>
								</g>
							</g>
						</g>
						<defs>
							<filter id="filter0_dd" x="168.5" y="519" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<filter id="filter1_dd" x="843.013" y="201.013" width="180.974" height="180.974" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<filter id="filter2_dd" x="726.2" y="28.2002" width="75.6" height="75.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image0" transform="translate(0.0113317 0.255562) scale(0.00696092 0.0121816)"></use>
							</pattern>
							<filter id="filter3_dd" x="617" y="117" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image1" transform="translate(0.00113512 0.236947) scale(0.000498866 0.000621343)"></use>
							</pattern>
							<filter id="filter4_dd" x="1117.6" y="155.6" width="100.8" height="100.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image2" transform="translate(-0.0769231 0.27692) scale(0.000281701)"></use>
							</pattern>
							<filter id="filter5_dd" x="996.2" y="550.2" width="75.6" height="75.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image3" transform="translate(-0.174852 0.175892) scale(0.000685386 0.00138482)"></use>
							</pattern>
							<filter id="filter6_dd" x="1083" y="439" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image4" transform="translate(0.0210892 0.356697) scale(0.00081754 0.0014307)"></use>
							</pattern>
							<filter id="filter7_dd" x="621" y="410" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image5" transform="translate(-0.0676053 -0.058724) scale(0.000709499 0.00124162)"></use>
							</pattern>
							<filter id="filter8_dd" x="732.2" y="520.2" width="75.6" height="75.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="-4" dy="-4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
								<feOffset dx="4" dy="4"></feOffset>
								<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"></feColorMatrix>
								<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
								<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
							</filter>
							<pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image6" transform="translate(-0.0387742 0.0781944) scale(0.00313242)"></use>
							</pattern>
							<linearGradient id="paint0_linear" x1="936.647" y1="303.9" x2="936.647" y2="252.467" gradientUnits="userSpaceOnUse">
								<stop stop-color="#582383"></stop>
								<stop offset="1" stop-color="#3FBCCB"></stop>
							</linearGradient>
							<linearGradient id="paint1_linear" x1="690.5" y1="144.5" x2="690.5" y2="212" gradientUnits="userSpaceOnUse">
								<stop stop-color="#141A2B" stop-opacity="0"></stop>
								<stop offset="1" stop-color="#141A2B"></stop>
							</linearGradient>
							<linearGradient id="paint2_linear" x1="683.5" y1="211.5" x2="818.25" y2="211.5" gradientUnits="userSpaceOnUse">
								<stop offset="1" stop-color="#141A2B"></stop>
							</linearGradient>
							<linearGradient id="paint3_linear" x1="791.5" y1="368" x2="588.5" y2="464" gradientUnits="userSpaceOnUse">
								<stop stop-color="#141A2B"></stop>
								<stop offset="1" stop-color="#141A2B" stop-opacity="0"></stop>
							</linearGradient>
							<linearGradient id="paint4_linear" x1="666" y1="371.5" x2="820" y2="371.5" gradientUnits="userSpaceOnUse">
								<stop offset="1" stop-color="#141A2B"></stop>
							</linearGradient>
							<linearGradient id="paint5_linear" x1="1013.5" y1="548" x2="1013.5" y2="406.833" gradientUnits="userSpaceOnUse">
								<stop offset="0.849384" stop-color="#141A2B"></stop>
							</linearGradient>
							<linearGradient id="paint6_linear" x1="1155" y1="193.5" x2="1352" y2="192.5" gradientUnits="userSpaceOnUse">
								<stop stop-color="#141A2B"></stop>
								<stop offset="1" stop-color="#141A2B" stop-opacity="0"></stop>
							</linearGradient>
							<linearGradient id="paint7_linear" x1="948" y1="223.5" x2="1089.17" y2="223.5" gradientUnits="userSpaceOnUse">
								<stop offset="0.849384" stop-color="#141A2B"></stop>
							</linearGradient>
							<linearGradient id="paint8_linear" x1="1256.5" y1="81" x2="1256.5" y2="287" gradientUnits="userSpaceOnUse">
								<stop stop-color="#45B5C8"></stop>
							</linearGradient>
							<linearGradient id="paint9_linear" x1="1210.7" y1="144.5" x2="1210.7" y2="105" gradientUnits="userSpaceOnUse">
								<stop stop-color="#45B5C8"></stop>
							</linearGradient>
							<linearGradient id="paint10_linear" x1="1250.69" y1="193.5" x2="1338.73" y2="193.3" gradientUnits="userSpaceOnUse">
								<stop stop-color="#45B5C8"></stop>
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	</div>
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"adventages_slider",
		array(
			"ACTIVE_DATE_FORMAT" => "d.m.Y",
			"ADD_SECTIONS_CHAIN" => "Y",
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"CACHE_FILTER" => "N",
			"CACHE_GROUPS" => "Y",
			"CACHE_TIME" => "36000000",
			"CACHE_TYPE" => "A",
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "Y",
			"DISPLAY_DATE" => "Y",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PICTURE" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FIELD_CODE" => array("NAME", "SORT", "PREVIEW_TEXT", ""),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "advantages",
			"IBLOCK_TYPE" => "content",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
			"INCLUDE_SUBSECTIONS" => "Y",
			"MESSAGE_404" => "",
			"NEWS_COUNT" => "20",
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "Новости",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array("", ""),
			"SET_BROWSER_TITLE" => "N",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "Y",
			"SET_META_KEYWORDS" => "Y",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "N",
			"SHOW_404" => "N",
			"SORT_BY1" => "ACTIVE_FROM",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N"
		)
	); ?>
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"suggests",
		array(
			"ACTIVE_DATE_FORMAT" => "d.m.Y",
			"ADD_SECTIONS_CHAIN" => "Y",
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"CACHE_FILTER" => "N",
			"CACHE_GROUPS" => "Y",
			"CACHE_TIME" => "36000000",
			"CACHE_TYPE" => "A",
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "Y",
			"DISPLAY_DATE" => "Y",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PICTURE" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FIELD_CODE" => array("SORT", "NAME", "PROPERTIES", "LINK"),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "suggest",
			"IBLOCK_TYPE" => "content",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
			"INCLUDE_SUBSECTIONS" => "Y",
			"MESSAGE_404" => "",
			"NEWS_COUNT" => "20",
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "Новости",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array("LINK", ""),
			"SET_BROWSER_TITLE" => "N",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "Y",
			"SET_META_KEYWORDS" => "Y",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "N",
			"SHOW_404" => "N",
			"SORT_BY1" => "ACTIVE_FROM",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N"
		)
	); ?>


	<div id="producer" class="section producer nav-section">
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
								"PATH" => "local/include/main/producer__title.php",
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
								"PATH" => "local/include/main/producer__text.php",
								"COMPONENT_TEMPLATE" => ".default"
							),
							false
						); ?></p>
					</p>
					<div data-sal="slide-up" data-sal-duration="900" data-sal-delay="300" class="section__button">
						<button data-ripple-color="light" class="button button--ripple button--partner">Стать партнером</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"capabilities",
		array(
			"ACTIVE_DATE_FORMAT" => "d.m.Y",
			"ADD_SECTIONS_CHAIN" => "Y",
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"CACHE_FILTER" => "N",
			"CACHE_GROUPS" => "Y",
			"CACHE_TIME" => "36000000",
			"CACHE_TYPE" => "A",
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "Y",
			"DISPLAY_DATE" => "Y",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PICTURE" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FIELD_CODE" => array(
				0 => "NAME",
				2 => "LINK",
				3 => "",
			),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "opportunity",
			"IBLOCK_TYPE" => "content",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
			"INCLUDE_SUBSECTIONS" => "Y",
			"MESSAGE_404" => "",
			"NEWS_COUNT" => "20",
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "Новости",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array(
				0 => "LINK",
				1 => "",
			),
			"SET_BROWSER_TITLE" => "N",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "Y",
			"SET_META_KEYWORDS" => "Y",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "N",
			"SHOW_404" => "N",
			"SORT_BY1" => "ACTIVE_FROM",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N",
			"COMPONENT_TEMPLATE" => "capabilities"
		),
		false
	); ?>
	<div id="customers" class="section customers">
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
								"PATH" => "local/include/main/customers__title.php",
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
								"PATH" => "local/include/main/customers__text.php",
								"COMPONENT_TEMPLATE" => ".default"
							),
							false
						); ?></p>
					<div data-sal="slide-up" data-sal-duration="900" data-sal-delay="300" class="section__button">
						<button data-ripple-color="light" class="button button--ripple button--partner">Стать партнером</button>
					</div>
				</div>
				<div class="customers__list-wrapper">
					<div class="container">
					</div>
				</div>
			</div>
		</div>
	</div>
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
								"PATH" => "local/include/main/suggest2__title.php",
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
								"PATH" => "local/include/main/suggest2__text.php",
								"COMPONENT_TEMPLATE" => ".default"
							),
							false
						); ?>
					</p>
				</div>
				<div class="control__content">
					<div class="control__left">
						<div class="control__managements managements">

							<div data-sal="slide-up" data-sal-duration="900" data-sal-delay="100" class="managements__item">
								<div class="managements__image">
									<div class="iso">
										<? $APPLICATION->IncludeComponent(
											"planar:image.component",
											"",
											array(
												"IMAGE" => "/upload/images/svg/iso.svg"
											)
										); ?>
									</div>
								</div>
								<p class="managements__text">
									<? $APPLICATION->IncludeComponent(
										"bitrix:main.include",
										".default",
										array(
											"AREA_FILE_SHOW" => "file",
											"AREA_FILE_SUFFIX" => "inc",
											"EDIT_TEMPLATE" => "",
											"PATH" => "local/include/main/suggest2__iso__text.php",
											"COMPONENT_TEMPLATE" => ".default"
										),
										false
									); ?></p>
							</div>
							<div data-sal="slide-up" data-sal-duration="900" data-sal-delay="200" class="managements__item">
							</div>
						</div>
						<div data-sal="slide-up" data-sal-duration="900" data-sal-delay="300" class="control__docs docs">
							<div class="docs__list">
								<? $APPLICATION->IncludeComponent(
									"bitrix:news.list",
									"docs",
									array(
										"ACTIVE_DATE_FORMAT" => "d.m.Y",
										"ADD_SECTIONS_CHAIN" => "Y",
										"AJAX_MODE" => "N",
										"AJAX_OPTION_ADDITIONAL" => "",
										"AJAX_OPTION_HISTORY" => "N",
										"AJAX_OPTION_JUMP" => "N",
										"AJAX_OPTION_STYLE" => "Y",
										"CACHE_FILTER" => "N",
										"CACHE_GROUPS" => "Y",
										"CACHE_TIME" => "36000000",
										"CACHE_TYPE" => "A",
										"CHECK_DATES" => "Y",
										"DETAIL_URL" => "",
										"DISPLAY_BOTTOM_PAGER" => "Y",
										"DISPLAY_DATE" => "Y",
										"DISPLAY_NAME" => "Y",
										"DISPLAY_PICTURE" => "Y",
										"DISPLAY_PREVIEW_TEXT" => "Y",
										"DISPLAY_TOP_PAGER" => "N",
										"FIELD_CODE" => array(
											0 => "NAME",
											1 => "PROPERTIES",
											2 => "ICON",
											3 => "FILE",
											4 => "",
										),
										"FILTER_NAME" => "",
										"HIDE_LINK_WHEN_NO_DETAIL" => "N",
										"IBLOCK_ID" => "docs",
										"IBLOCK_TYPE" => "content",
										"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
										"INCLUDE_SUBSECTIONS" => "Y",
										"MESSAGE_404" => "",
										"NEWS_COUNT" => "20",
										"PAGER_BASE_LINK_ENABLE" => "N",
										"PAGER_DESC_NUMBERING" => "N",
										"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
										"PAGER_SHOW_ALL" => "N",
										"PAGER_SHOW_ALWAYS" => "N",
										"PAGER_TEMPLATE" => ".default",
										"PAGER_TITLE" => "Новости",
										"PARENT_SECTION" => "",
										"PARENT_SECTION_CODE" => "",
										"PREVIEW_TRUNCATE_LEN" => "",
										"PROPERTY_CODE" => array(
											0 => "",
											1 => "ICON",
											2 => "DOC",
											3 => "",
										),
										"SET_BROWSER_TITLE" => "N",
										"SET_LAST_MODIFIED" => "N",
										"SET_META_DESCRIPTION" => "Y",
										"SET_META_KEYWORDS" => "Y",
										"SET_STATUS_404" => "N",
										"SET_TITLE" => "N",
										"SHOW_404" => "N",
										"SORT_BY1" => "ACTIVE_FROM",
										"SORT_BY2" => "SORT",
										"SORT_ORDER1" => "DESC",
										"SORT_ORDER2" => "ASC",
										"STRICT_SECTION_CHECK" => "N",
										"COMPONENT_TEMPLATE" => "docs",
										"DOCUMENT_CODE" => array(
											0 => "otsenka-usloviy-truda-2021-aprel",
										)
									),
									false
								); ?>
							</div>
						</div>
					</div>
					<div class="control__right">
						<div class="control__certificate certificate">
							<div data-sal="slide-right" data-sal-duration="900" data-sal-delay="100">
								<? $APPLICATION->IncludeComponent(
									"planar:image.component",
									"",
									array(
										"IMAGE" => "/upload/images/certificate_big.jpg"
									)
								); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"numbers",
		array(
			"ACTIVE_DATE_FORMAT" => "d.m.Y",
			"ADD_SECTIONS_CHAIN" => "Y",
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"CACHE_FILTER" => "N",
			"CACHE_GROUPS" => "Y",
			"CACHE_TIME" => "36000000",
			"CACHE_TYPE" => "A",
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "Y",
			"DISPLAY_DATE" => "Y",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PICTURE" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FIELD_CODE" => array(
				0 => "NAME",
				2 => "ICON",
				3 => "",
			),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "planar_in_nums",
			"IBLOCK_TYPE" => "content",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
			"INCLUDE_SUBSECTIONS" => "Y",
			"MESSAGE_404" => "",
			"NEWS_COUNT" => "20",
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "Новости",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array(
				0 => "ICON",
				1 => "",
			),
			"SET_BROWSER_TITLE" => "N",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "Y",
			"SET_META_KEYWORDS" => "Y",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "N",
			"SHOW_404" => "N",
			"SORT_BY1" => "ACTIVE_FROM",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N",
			"COMPONENT_TEMPLATE" => "numbers"
		),
		false
	); ?>
	<div id="docs">
		<div class="container">
			<div class="docs">
				<? $APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"docs",
					array(
						"ACTIVE_DATE_FORMAT" => "d.m.Y",
						"ADD_SECTIONS_CHAIN" => "Y",
						"AJAX_MODE" => "N",
						"AJAX_OPTION_ADDITIONAL" => "",
						"AJAX_OPTION_HISTORY" => "N",
						"AJAX_OPTION_JUMP" => "N",
						"AJAX_OPTION_STYLE" => "Y",
						"CACHE_FILTER" => "N",
						"CACHE_GROUPS" => "Y",
						"CACHE_TIME" => "36000000",
						"CACHE_TYPE" => "A",
						"CHECK_DATES" => "Y",
						"DETAIL_URL" => "",
						"DISPLAY_BOTTOM_PAGER" => "Y",
						"DISPLAY_DATE" => "Y",
						"DISPLAY_NAME" => "Y",
						"DISPLAY_PICTURE" => "Y",
						"DISPLAY_PREVIEW_TEXT" => "Y",
						"DISPLAY_TOP_PAGER" => "N",
						"FIELD_CODE" => array(
							0 => "NAME",
							1 => "PROPERTIES",
							2 => "ICON",
							3 => "FILE",
							4 => "",
						),
						"FILTER_NAME" => "",
						"HIDE_LINK_WHEN_NO_DETAIL" => "N",
						"IBLOCK_ID" => "docs",
						"IBLOCK_TYPE" => "content",
						"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
						"INCLUDE_SUBSECTIONS" => "Y",
						"MESSAGE_404" => "",
						"NEWS_COUNT" => "20",
						"PAGER_BASE_LINK_ENABLE" => "N",
						"PAGER_DESC_NUMBERING" => "N",
						"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
						"PAGER_SHOW_ALL" => "N",
						"PAGER_SHOW_ALWAYS" => "N",
						"PAGER_TEMPLATE" => ".default",
						"PAGER_TITLE" => "Новости",
						"PARENT_SECTION" => "",
						"PARENT_SECTION_CODE" => "",
						"PREVIEW_TRUNCATE_LEN" => "",
						"PROPERTY_CODE" => array(
							0 => "",
							1 => "ICON",
							2 => "DOC",
							3 => "",
						),
						"SET_BROWSER_TITLE" => "N",
						"SET_LAST_MODIFIED" => "N",
						"SET_META_DESCRIPTION" => "Y",
						"SET_META_KEYWORDS" => "Y",
						"SET_STATUS_404" => "N",
						"SET_TITLE" => "N",
						"SHOW_404" => "N",
						"SORT_BY1" => "ACTIVE_FROM",
						"SORT_BY2" => "SORT",
						"SORT_ORDER1" => "DESC",
						"SORT_ORDER2" => "ASC",
						"STRICT_SECTION_CHECK" => "N",
						"COMPONENT_TEMPLATE" => "docs",
						"DOCUMENT_CODE" => array(
							0 => "skladskie-ostatki",
							1 => "perechen-meropriyatiy-2021-aprel",
							2 => "otsenka-usloviy-truda-2021-aprel"
						)
					),
					false
				); ?>
			</div>
		</div>
	</div>
	<? $APPLICATION->IncludeComponent(
		"planar:form.component",
		"",
		array("PRODUCT_ID" => "0")
	); ?>
</main>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
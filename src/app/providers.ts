import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    OsTypes : ["Windows", "Android", "IOS","Linux"],
    BatteryLevels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
    MemoryAvailable: ['1 GB', '2 GB', '3 GB', '4 GB', '5 GB', '6 GB', '7 GB', '8 GB', '9 GB', '10 GB', '11 GB', '12 GB', '13 GB', '14 GB', '15 GB', '16 GB', '17 GB', '18 GB', '19 GB', '20 GB', '21 GB', '22 GB', '23 GB', '24 GB', '25 GB', '26 GB', '27 GB', '28 GB', '29 GB', '30 GB', '31 GB', '32 GB', '33 GB', '34 GB', '35 GB', '36 GB', '37 GB', '38 GB', '39 GB', '40 GB', '41 GB', '42 GB', '43 GB', '44 GB', '45 GB', '46 GB', '47 GB', '48 GB', '49 GB', '50 GB', '51 GB', '52 GB', '53 GB', '54 GB', '55 GB', '56 GB', '57 GB', '58 GB', '59 GB', '60 GB', '61 GB', '62 GB', '63 GB', '64 GB', '65 GB', '66 GB', '67 GB', '68 GB', '69 GB', '70 GB', '71 GB', '72 GB', '73 GB', '74 GB', '75 GB', '76 GB', '77 GB', '78 GB', '79 GB', '80 GB', '81 GB', '82 GB', '83 GB', '84 GB', '85 GB', '86 GB', '87 GB', '88 GB', '89 GB', '90 GB', '91 GB', '92 GB', '93 GB', '94 GB', '95 GB', '96 GB', '97 GB', '98 GB', '99 GB', '100 GB', '101 GB', '102 GB', '103 GB', '104 GB', '105 GB', '106 GB', '107 GB', '108 GB', '109 GB', '110 GB', '111 GB', '112 GB', '113 GB', '114 GB', '115 GB', '116 GB', '117 GB', '118 GB', '119 GB', '120 GB', '121 GB', '122 GB', '123 GB', '124 GB', '125 GB', '126 GB', '127 GB', '128 GB', '129 GB', '130 GB', '131 GB', '132 GB', '133 GB', '134 GB', '135 GB', '136 GB', '137 GB', '138 GB', '139 GB', '140 GB', '141 GB', '142 GB', '143 GB', '144 GB', '145 GB', '146 GB', '147 GB', '148 GB', '149 GB', '150 GB', '151 GB', '152 GB', '153 GB', '154 GB', '155 GB', '156 GB', '157 GB', '158 GB', '159 GB', '160 GB', '161 GB', '162 GB', '163 GB', '164 GB', '165 GB', '166 GB', '167 GB', '168 GB', '169 GB', '170 GB', '171 GB', '172 GB', '173 GB', '174 GB', '175 GB', '176 GB', '177 GB', '178 GB', '179 GB', '180 GB', '181 GB', '182 GB', '183 GB', '184 GB', '185 GB', '186 GB', '187 GB', '188 GB', '189 GB', '190 GB', '191 GB', '192 GB', '193 GB', '194 GB', '195 GB', '196 GB', '197 GB', '198 GB', '199 GB', '200 GB', '201 GB', '202 GB', '203 GB', '204 GB', '205 GB', '206 GB', '207 GB', '208 GB', '209 GB', '210 GB', '211 GB', '212 GB', '213 GB', '214 GB', '215 GB', '216 GB', '217 GB', '218 GB', '219 GB', '220 GB', '221 GB', '222 GB', '223 GB', '224 GB', '225 GB', '226 GB', '227 GB', '228 GB', '229 GB', '230 GB', '231 GB', '232 GB', '233 GB', '234 GB', '235 GB', '236 GB', '237 GB', '238 GB', '239 GB', '240 GB', '241 GB', '242 GB', '243 GB', '244 GB', '245 GB', '246 GB', '247 GB', '248 GB', '249 GB', '250 GB', '251 GB', '252 GB', '253 GB', '254 GB', '255 GB', '256 GB', '257 GB', '258 GB', '259 GB', '260 GB', '261 GB', '262 GB', '263 GB', '264 GB', '265 GB', '266 GB', '267 GB', '268 GB', '269 GB', '270 GB', '271 GB', '272 GB', '273 GB', '274 GB', '275 GB', '276 GB', '277 GB', '278 GB', '279 GB', '280 GB', '281 GB', '282 GB', '283 GB', '284 GB', '285 GB', '286 GB', '287 GB', '288 GB', '289 GB', '290 GB', '291 GB', '292 GB', '293 GB', '294 GB', '295 GB', '296 GB', '297 GB', '298 GB', '299 GB', '300 GB', '301 GB', '302 GB', '303 GB', '304 GB', '305 GB', '306 GB', '307 GB', '308 GB', '309 GB', '310 GB', '311 GB', '312 GB', '313 GB', '314 GB', '315 GB', '316 GB', '317 GB', '318 GB', '319 GB', '320 GB', '321 GB', '322 GB', '323 GB', '324 GB', '325 GB', '326 GB', '327 GB', '328 GB', '329 GB', '330 GB', '331 GB', '332 GB', '333 GB', '334 GB', '335 GB', '336 GB', '337 GB', '338 GB', '339 GB', '340 GB', '341 GB', '342 GB', '343 GB', '344 GB', '345 GB', '346 GB', '347 GB', '348 GB', '349 GB', '350 GB', '351 GB', '352 GB', '353 GB', '354 GB', '355 GB', '356 GB', '357 GB', '358 GB', '359 GB', '360 GB', '361 GB', '362 GB', '363 GB', '364 GB', '365 GB', '366 GB', '367 GB', '368 GB', '369 GB', '370 GB', '371 GB', '372 GB', '373 GB', '374 GB', '375 GB', '376 GB', '377 GB', '378 GB', '379 GB', '380 GB', '381 GB', '382 GB', '383 GB', '384 GB', '385 GB', '386 GB', '387 GB', '388 GB', '389 GB', '390 GB', '391 GB', '392 GB', '393 GB', '394 GB', '395 GB', '396 GB', '397 GB', '398 GB', '399 GB', '400 GB', '401 GB', '402 GB', '403 GB', '404 GB', '405 GB', '406 GB', '407 GB', '408 GB', '409 GB', '410 GB', '411 GB', '412 GB', '413 GB', '414 GB', '415 GB', '416 GB', '417 GB', '418 GB', '419 GB', '420 GB', '421 GB', '422 GB', '423 GB', '424 GB', '425 GB', '426 GB', '427 GB', '428 GB', '429 GB', '430 GB', '431 GB', '432 GB', '433 GB', '434 GB', '435 GB', '436 GB', '437 GB', '438 GB', '439 GB', '440 GB', '441 GB', '442 GB', '443 GB', '444 GB', '445 GB', '446 GB', '447 GB', '448 GB', '449 GB', '450 GB', '451 GB', '452 GB', '453 GB', '454 GB', '455 GB', '456 GB', '457 GB', '458 GB', '459 GB', '460 GB', '461 GB', '462 GB', '463 GB', '464 GB', '465 GB', '466 GB', '467 GB', '468 GB', '469 GB', '470 GB', '471 GB', '472 GB', '473 GB', '474 GB', '475 GB', '476 GB', '477 GB', '478 GB', '479 GB', '480 GB', '481 GB', '482 GB', '483 GB', '484 GB', '485 GB', '486 GB', '487 GB', '488 GB', '489 GB', '490 GB', '491 GB', '492 GB', '493 GB', '494 GB', '495 GB', '496 GB', '497 GB', '498 GB', '499 GB', '500 GB', '501 GB', '502 GB', '503 GB', '504 GB', '505 GB', '506 GB', '507 GB', '508 GB', '509 GB', '510 GB', '511 GB', '512 GB', '513 GB', '514 GB', '515 GB', '516 GB', '517 GB', '518 GB', '519 GB', '520 GB', '521 GB', '522 GB', '523 GB', '524 GB', '525 GB', '526 GB', '527 GB', '528 GB', '529 GB', '530 GB', '531 GB', '532 GB', '533 GB', '534 GB', '535 GB', '536 GB', '537 GB', '538 GB', '539 GB', '540 GB', '541 GB', '542 GB', '543 GB', '544 GB', '545 GB', '546 GB', '547 GB', '548 GB', '549 GB', '550 GB', '551 GB', '552 GB', '553 GB', '554 GB', '555 GB', '556 GB', '557 GB', '558 GB', '559 GB', '560 GB', '561 GB', '562 GB', '563 GB', '564 GB', '565 GB', '566 GB', '567 GB', '568 GB', '569 GB', '570 GB', '571 GB', '572 GB', '573 GB', '574 GB', '575 GB', '576 GB', '577 GB', '578 GB', '579 GB', '580 GB', '581 GB', '582 GB', '583 GB', '584 GB', '585 GB', '586 GB', '587 GB', '588 GB', '589 GB', '590 GB', '591 GB', '592 GB', '593 GB', '594 GB', '595 GB', '596 GB', '597 GB', '598 GB', '599 GB', '600 GB', '601 GB', '602 GB', '603 GB', '604 GB', '605 GB', '606 GB', '607 GB', '608 GB', '609 GB', '610 GB', '611 GB', '612 GB', '613 GB', '614 GB', '615 GB', '616 GB', '617 GB', '618 GB', '619 GB', '620 GB', '621 GB', '622 GB', '623 GB', '624 GB', '625 GB', '626 GB', '627 GB', '628 GB', '629 GB', '630 GB', '631 GB', '632 GB', '633 GB', '634 GB', '635 GB', '636 GB', '637 GB', '638 GB', '639 GB', '640 GB', '641 GB', '642 GB', '643 GB', '644 GB', '645 GB', '646 GB', '647 GB', '648 GB', '649 GB', '650 GB', '651 GB', '652 GB', '653 GB', '654 GB', '655 GB', '656 GB', '657 GB', '658 GB', '659 GB', '660 GB', '661 GB', '662 GB', '663 GB', '664 GB', '665 GB', '666 GB', '667 GB', '668 GB', '669 GB', '670 GB', '671 GB', '672 GB', '673 GB', '674 GB', '675 GB', '676 GB', '677 GB', '678 GB', '679 GB', '680 GB', '681 GB', '682 GB', '683 GB', '684 GB', '685 GB', '686 GB', '687 GB', '688 GB', '689 GB', '690 GB', '691 GB', '692 GB', '693 GB', '694 GB', '695 GB', '696 GB', '697 GB', '698 GB', '699 GB', '700 GB', '701 GB', '702 GB', '703 GB', '704 GB', '705 GB', '706 GB', '707 GB', '708 GB', '709 GB', '710 GB', '711 GB', '712 GB', '713 GB', '714 GB', '715 GB', '716 GB', '717 GB', '718 GB', '719 GB', '720 GB', '721 GB', '722 GB', '723 GB', '724 GB', '725 GB', '726 GB', '727 GB', '728 GB', '729 GB', '730 GB', '731 GB', '732 GB', '733 GB', '734 GB', '735 GB', '736 GB', '737 GB', '738 GB', '739 GB', '740 GB', '741 GB', '742 GB', '743 GB', '744 GB', '745 GB', '746 GB', '747 GB', '748 GB', '749 GB', '750 GB', '751 GB', '752 GB', '753 GB', '754 GB', '755 GB', '756 GB', '757 GB', '758 GB', '759 GB', '760 GB', '761 GB', '762 GB', '763 GB', '764 GB', '765 GB', '766 GB', '767 GB', '768 GB', '769 GB', '770 GB', '771 GB', '772 GB', '773 GB', '774 GB', '775 GB', '776 GB', '777 GB', '778 GB', '779 GB', '780 GB', '781 GB', '782 GB', '783 GB', '784 GB', '785 GB', '786 GB', '787 GB', '788 GB', '789 GB', '790 GB', '791 GB', '792 GB', '793 GB', '794 GB', '795 GB', '796 GB', '797 GB', '798 GB', '799 GB', '800 GB', '801 GB', '802 GB', '803 GB', '804 GB', '805 GB', '806 GB', '807 GB', '808 GB', '809 GB', '810 GB', '811 GB', '812 GB', '813 GB', '814 GB', '815 GB', '816 GB', '817 GB', '818 GB', '819 GB', '820 GB', '821 GB', '822 GB', '823 GB', '824 GB', '825 GB', '826 GB', '827 GB', '828 GB', '829 GB', '830 GB', '831 GB', '832 GB', '833 GB', '834 GB', '835 GB', '836 GB', '837 GB', '838 GB', '839 GB', '840 GB', '841 GB', '842 GB', '843 GB', '844 GB', '845 GB', '846 GB', '847 GB', '848 GB', '849 GB', '850 GB', '851 GB', '852 GB', '853 GB', '854 GB', '855 GB', '856 GB', '857 GB', '858 GB', '859 GB', '860 GB', '861 GB', '862 GB', '863 GB', '864 GB', '865 GB', '866 GB', '867 GB', '868 GB', '869 GB', '870 GB', '871 GB', '872 GB', '873 GB', '874 GB', '875 GB', '876 GB', '877 GB', '878 GB', '879 GB', '880 GB', '881 GB', '882 GB', '883 GB', '884 GB', '885 GB', '886 GB', '887 GB', '888 GB', '889 GB', '890 GB', '891 GB', '892 GB', '893 GB', '894 GB', '895 GB', '896 GB', '897 GB', '898 GB', '899 GB', '900 GB', '901 GB', '902 GB', '903 GB', '904 GB', '905 GB', '906 GB', '907 GB', '908 GB', '909 GB', '910 GB', '911 GB', '912 GB', '913 GB', '914 GB', '915 GB', '916 GB', '917 GB', '918 GB', '919 GB', '920 GB', '921 GB', '922 GB', '923 GB', '924 GB', '925 GB', '926 GB', '927 GB', '928 GB', '929 GB', '930 GB', '931 GB', '932 GB', '933 GB', '934 GB', '935 GB', '936 GB', '937 GB', '938 GB', '939 GB', '940 GB', '941 GB', '942 GB', '943 GB', '944 GB', '945 GB', '946 GB', '947 GB', '948 GB', '949 GB', '950 GB', '951 GB', '952 GB', '953 GB', '954 GB', '955 GB', '956 GB', '957 GB', '958 GB', '959 GB', '960 GB', '961 GB', '962 GB', '963 GB', '964 GB', '965 GB', '966 GB', '967 GB', '968 GB', '969 GB', '970 GB', '971 GB', '972 GB', '973 GB', '974 GB', '975 GB', '976 GB', '977 GB', '978 GB', '979 GB', '980 GB', '981 GB', '982 GB', '983 GB', '984 GB', '985 GB', '986 GB', '987 GB', '988 GB', '989 GB', '990 GB', '991 GB', '992 GB', '993 GB', '994 GB', '995 GB', '996 GB', '997 GB', '998 GB', '999 GB', '1000 GB', '1001 GB', '1002 GB', '1003 GB', '1004 GB', '1005 GB', '1006 GB', '1007 GB', '1008 GB', '1009 GB', '1010 GB', '1011 GB', '1012 GB', '1013 GB', '1014 GB', '1015 GB', '1016 GB', '1017 GB', '1018 GB', '1019 GB', '1020 GB', '1021 GB', '1022 GB', '1023 GB']
  };
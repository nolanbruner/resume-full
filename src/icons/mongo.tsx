import * as svg from "./svg"

const mongo = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} p="5px" width={props.width} height={props.height} viewBox="0 -183 512 512" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                    <path d="M476.713442,60.4626238 C476.252384,60.5550082 475.791324,61.5703742 475.791324,62.1238178 C475.69894,65.8148802 475.606556,75.5972748 475.606556,82.241187 C475.606556,82.425956 475.882846,82.7946306 476.16,82.7946306 C477.54404,82.887015 480.866428,82.9793996 483.726894,82.9793996 C487.69511,82.9793996 490.00213,82.425956 491.29465,81.8725124 C494.616174,80.2113186 496.184984,76.6117772 496.184984,72.6435614 C496.184984,63.6926272 489.909746,60.2778548 480.589274,60.2778548 C479.943446,60.1863338 478.098346,60.1863338 476.713442,60.4626238 L476.713442,60.4626238 L476.713442,60.4626238 Z M500.522738,101.712728 C500.522738,92.5770252 493.785578,87.5010588 481.60464,87.5010588 C481.051196,87.5010588 477.175366,87.4086744 476.252384,87.5934434 C475.97523,87.6858278 475.606556,87.8705968 475.606556,88.1477502 C475.606556,94.699278 475.514172,105.127501 475.791324,109.187238 C475.97523,110.940816 477.26775,113.432607 478.83656,114.170819 C480.49689,115.093801 484.2812,115.277706 486.864512,115.277706 C494.155116,115.277706 500.522738,111.217969 500.522738,101.712728 L500.522738,101.712728 L500.522738,101.712728 Z M457.888592,55.387521 C458.810712,55.387521 461.579656,55.663811 468.68549,55.663811 C475.421786,55.663811 480.774044,55.4799054 487.326434,55.4799054 C495.354388,55.4799054 506.428438,58.3403708 506.428438,70.3365394 C506.428438,76.2431028 502.275454,80.949531 496.830812,83.256553 C496.554522,83.3489374 496.554522,83.532843 496.830812,83.6252274 C504.582474,85.5635748 511.41202,90.3623876 511.41202,99.4057064 C511.41202,108.26512 505.874994,113.893666 497.846178,117.400823 C492.95498,119.523076 486.864512,120.261288 480.681658,120.261288 C475.97523,120.261288 463.333234,119.707845 456.319784,119.892614 C455.581572,119.61546 456.965612,116.293072 457.61144,115.739629 C459.272634,115.647244 460.56429,115.55486 462.317868,115.001416 C464.809658,114.355588 465.085948,113.617376 465.455486,109.833929 C465.640256,106.603926 465.640256,95.1603372 465.640256,87.0399998 C465.640256,75.8735648 465.73264,68.306671 465.640256,64.6156086 C465.547872,61.7551432 464.532506,60.8321618 462.502636,60.2778548 C460.933828,60.0015648 458.349652,59.6320268 456.2274,59.3557368 C455.765476,58.8938144 457.334286,55.7561954 457.888592,55.387521 L457.888592,55.387521 L457.888592,55.387521 Z M404.641456,112.786779 C406.856958,114.539494 411.193848,115.277706 415.069678,115.277706 C420.05326,115.277706 425.03598,114.355588 429.834792,110.017835 C434.72599,105.58856 438.139898,98.7598784 438.139898,87.8705968 C438.139898,77.4423742 434.171682,68.952499 426.051346,63.9697806 C421.437302,61.1084518 415.530738,59.9091802 408.702056,59.9091802 C406.672188,59.9091802 404.73384,60.0015648 403.53457,60.5550082 C403.257416,60.7397772 402.611588,61.5703742 402.611588,62.0314332 C402.426818,63.8773962 402.426818,78.0882022 402.426818,86.3941718 C402.426818,94.9764316 402.426818,106.9726 402.611588,108.356641 C402.611588,109.741545 403.257416,111.863797 404.641456,112.786779 L404.641456,112.786779 L404.641456,112.786779 Z M383.69349,55.387521 C385.447068,55.387521 392.183366,55.663811 395.413368,55.663811 C401.227548,55.663811 405.379668,55.387521 416.361334,55.387521 C425.589422,55.387521 433.341086,57.8793118 438.87811,62.5848768 C445.614408,68.3990554 449.121564,76.4278716 449.121564,86.2094028 C449.121564,100.143919 442.753942,108.172735 436.38632,112.786779 C430.01956,117.493207 421.713592,120.261288 409.902192,120.261288 C403.626954,120.261288 392.830056,120.076519 383.87826,119.984135 L383.785874,119.984135 C383.324816,119.154401 384.524088,115.924398 385.2623,115.832013 C387.661706,115.55486 388.307534,115.462475 389.507668,115.001416 C391.445152,114.263204 391.81469,113.247838 392.091844,109.833929 C392.368134,103.466307 392.27575,95.8070286 392.27575,87.1323844 C392.27575,80.949531 392.368134,68.8601146 392.183366,64.9842832 C391.907076,61.7551432 390.523034,60.9245462 387.75409,60.3702392 C386.37005,60.0939492 384.524088,59.7244114 381.940776,59.4481212 C381.571238,58.8014298 383.232432,55.9409644 383.69349,55.387521 L383.69349,55.387521 L383.69349,55.387521 Z" fill="#8E714E"></path>
                    <path d="M272.033456,116.385457 C269.726434,116.108303 268.06524,115.739629 266.034508,114.816647 C265.758218,114.631878 265.296296,113.70976 265.296296,113.340222 C265.111528,110.110219 265.111528,100.882131 265.111528,94.699278 C265.111528,89.7156962 264.281794,85.378806 262.158678,82.3335716 C259.666886,78.8264146 256.068208,76.7965462 251.454164,76.7965462 C247.393564,76.7965462 241.948924,79.5654906 237.427264,83.441322 C237.33488,83.532843 236.596668,84.1795344 236.689052,83.1641684 C236.689052,82.1488026 236.87382,80.118934 236.966206,78.7348936 C237.05859,77.4423742 236.320378,76.7965462 236.320378,76.7965462 C233.366664,78.2729712 225.061558,80.2113186 222.016323,80.4876086 C219.801686,80.949531 219.248242,83.071784 221.555264,83.8099964 L221.647649,83.8099964 C224.138576,84.548209 225.79977,85.378806 227.091426,86.2094028 C228.014408,86.9476154 227.922022,87.9629812 227.922022,88.7935782 C228.014408,95.714644 228.014408,106.326772 227.738118,112.140951 C227.645732,114.447973 226.999904,115.277706 225.338712,115.647244 L225.522616,115.55486 C224.23096,115.832013 223.215594,116.108303 221.646785,116.293072 C221.093342,116.846516 221.093342,119.800229 221.646785,120.446057 C222.662152,120.446057 228.014408,120.168904 232.444546,120.168904 C238.535014,120.168904 241.672634,120.446057 243.241442,120.446057 C243.88727,119.707845 244.07204,116.9389 243.702502,116.293072 C241.948924,116.200688 240.657268,116.016782 239.457996,115.647244 C237.796802,115.277706 237.33488,114.447973 237.242496,112.509625 C237.05859,107.618428 237.05859,97.2834534 237.05859,90.2700032 C237.05859,88.3316558 237.612034,87.4086744 238.165476,86.8552308 C240.28773,85.0101314 243.702502,83.717612 246.747736,83.717612 C249.700586,83.717612 251.638934,84.6405934 253.115358,85.8407284 C255.145228,87.5010588 255.791056,89.9004652 256.068208,91.6540436 C256.529268,95.6222596 256.345362,103.466307 256.345362,110.294988 C256.345362,113.98605 256.068208,114.909032 254.684168,115.370091 C254.03834,115.647244 252.377146,116.016782 250.438798,116.200688 C249.79297,116.846516 249.97774,119.707845 250.438798,120.353673 C253.115358,120.353673 256.252978,120.076519 260.867022,120.076519 C266.587952,120.076519 270.279878,120.353673 271.756302,120.353673 C272.217362,119.800229 272.40213,117.123669 272.032592,116.385457 L272.033456,116.385457 L272.033456,116.385457 Z M297.595466,81.1343 C292.70427,81.1343 289.659034,84.9177468 289.659034,90.8234468 C289.659034,96.821531 292.334732,103.742597 299.902488,103.742597 C301.194144,103.742597 303.59355,103.189153 304.700438,101.897497 C306.454016,100.236303 307.654152,96.9139156 307.654152,93.407622 C307.654152,85.7483438 303.86984,81.1343 297.595466,81.1343 L297.595466,81.1343 L297.595466,81.1343 Z M296.948776,121.922482 C295.103676,121.922482 293.811156,122.475926 292.981422,122.937848 C289.104728,125.428776 287.352012,127.828182 287.352012,130.689511 C287.352012,133.365207 288.366516,135.48746 290.582016,137.333423 C293.257712,139.640445 296.948776,140.748195 301.655204,140.748195 C311.06806,140.748195 315.221044,135.672229 315.221044,130.689511 C315.221044,127.182354 313.467466,124.875332 309.868788,123.583676 C307.284614,122.475926 302.578184,121.922482 296.948776,121.922482 L296.948776,121.922482 L296.948776,121.922482 Z M297.595466,145.915683 C291.966056,145.915683 287.905456,144.715548 284.399162,142.039851 C280.98439,139.455676 279.507966,135.579845 279.507966,132.904148 C279.507966,132.165936 279.692734,130.135204 281.353928,128.290104 C282.368432,127.182354 284.583068,125.060101 289.843804,121.461423 C290.02771,121.369039 290.120094,121.276654 290.120094,121.091885 C290.120094,120.907116 289.935324,120.722347 289.75142,120.630826 C285.413666,118.969632 284.12201,116.293072 283.752472,114.816647 L283.752472,114.631878 C283.66095,114.078435 283.476182,113.524991 284.306778,112.970684 C284.952606,112.509625 285.875588,111.956182 286.89009,111.310354 C288.4589,110.387373 290.120094,109.372007 291.13546,108.54141 C291.320228,108.356641 291.320228,108.172735 291.320228,107.987966 C291.320228,107.803197 291.13546,107.618428 290.95069,107.526907 C284.491548,105.403791 281.261544,100.604978 281.261544,93.407622 C281.261544,88.7011938 283.383798,84.4558244 287.167244,81.780128 C289.75142,79.7493962 296.210562,77.2584686 300.455932,77.2584686 L300.733086,77.2584686 C305.069976,77.3499898 307.469382,78.2729712 310.883292,79.473106 C312.729254,80.118934 314.482832,80.3952242 316.882238,80.3952242 C320.480916,80.3952242 322.049726,79.2883372 323.341382,77.9966812 C323.433766,78.1805866 323.618536,78.6425092 323.71092,79.8417806 C323.803304,81.0419156 323.433766,82.7946306 322.510786,84.08715 C321.772572,85.1016524 320.112242,85.8407284 318.451048,85.8407284 L317.989126,85.8407284 C316.327932,85.6559594 315.58972,85.4711904 315.58972,85.4711904 L315.221044,85.6559594 C315.12866,85.8407284 315.221044,86.024634 315.31343,86.3017874 L315.405814,86.4865564 C315.58972,87.3171532 315.959258,89.8080808 315.959258,90.4547722 C315.959258,98.021666 312.914022,101.34319 309.68402,103.834981 C306.5464,106.142003 302.947722,107.618428 298.887122,107.987966 C298.794738,107.987966 298.426064,107.987966 297.595466,108.080351 C297.133544,108.080351 296.487716,108.172735 296.395332,108.172735 L296.302948,108.172735 C295.564734,108.356641 293.719636,109.279622 293.719636,110.848432 C293.719636,112.232472 294.550232,113.893666 298.517584,114.170819 C299.348182,114.263204 300.178778,114.263204 301.10176,114.355588 C306.361632,114.724263 312.914022,115.186185 315.959258,116.200688 C320.203764,117.769497 322.880324,121.552944 322.880324,126.075467 C322.880324,132.904148 317.989126,139.27177 309.868788,143.239123 C305.900572,144.992701 301.932356,145.915683 297.595466,145.915683 L297.595466,145.915683 L297.595466,145.915683 Z M350.195912,81.595359 C348.257564,81.595359 346.503986,82.056418 345.21233,82.9793996 C341.613652,85.194037 339.76769,89.6241752 339.76769,96.0833186 C339.76769,108.172735 345.858158,116.66261 354.532802,116.66261 C357.116978,116.66261 359.146846,115.924398 360.900424,114.447973 C363.57612,112.232472 364.961024,107.803197 364.961024,101.620344 C364.961024,89.6241752 358.962076,81.595359 350.195912,81.595359 L350.195912,81.595359 L350.195912,81.595359 Z M351.857106,121.091885 C336.169012,121.091885 330.539602,109.556776 330.539602,98.7598784 C330.539602,91.1929846 333.584836,85.378806 339.675304,81.225821 C344.013058,78.5501246 349.180546,77.0736996 353.79459,77.0736996 C365.790758,77.0736996 374.189112,85.6559594 374.189112,98.021666 C374.189112,106.419157 370.866724,113.063069 364.499102,117.123669 C361.453868,119.153538 356.193996,121.091885 351.856242,121.091885 L351.857106,121.091885 L351.857106,121.091885 Z M187.410994,81.595359 C185.472647,81.595359 183.719932,82.056418 182.427413,82.9793996 C178.828735,85.194037 176.982772,89.6241752 176.982772,96.0833186 C176.982772,108.172735 183.073241,116.66261 191.747885,116.66261 C194.33206,116.66261 196.361929,115.924398 198.115507,114.447973 C200.791203,112.232472 202.176107,107.803197 202.176107,101.620344 C202.176107,89.6241752 196.269544,81.595359 187.410994,81.595359 L187.410994,81.595359 L187.410994,81.595359 Z M189.072188,121.091885 C173.384094,121.091885 167.754684,109.556776 167.754684,98.7598784 C167.754684,91.1929846 170.799918,85.378806 176.890387,81.225821 C181.228141,78.5501246 186.395628,77.0736996 191.009672,77.0736996 C203.006704,77.0736996 211.404195,85.6559594 211.404195,98.021666 C211.404195,106.419157 208.081807,113.063069 201.714185,117.123669 C198.761335,119.153538 193.501463,121.091885 189.072188,121.091885 L189.072188,121.091885 L189.072188,121.091885 Z M83.5941444,120.168904 C83.4093754,119.892614 83.2246064,119.062017 83.316991,118.046651 C83.316991,117.308438 83.50176,116.846516 83.5941444,116.66261 C85.5316284,116.385457 86.5469944,116.108303 87.6538814,115.832013 C89.4998442,115.370091 90.2380568,114.355588 90.3304412,112.048566 C90.6075946,106.511541 90.6075946,95.990934 90.5152102,88.7011938 L90.5152102,88.5164248 C90.5152102,87.6858278 90.5152102,86.6704618 89.4998442,85.9322494 C88.0234192,85.0101314 86.2698408,84.1795344 83.962819,83.532843 C83.132222,83.256553 82.5787784,82.7946306 82.671163,82.241187 C82.671163,81.6877436 83.2246064,81.0419156 84.4247414,80.8571466 C87.4699758,80.579993 95.405544,78.6425092 98.543163,77.2584686 C98.727932,77.4423742 99.0050854,77.9966812 99.0050854,78.7348936 L98.912701,79.7493962 C98.8203164,80.764762 98.727932,81.964897 98.727932,83.1641684 C98.727932,83.532843 99.0974698,83.8099964 99.4661444,83.8099964 C99.6509134,83.8099964 99.8356824,83.717612 100.020451,83.6252274 C105.926151,79.0111836 111.278407,77.3499898 114.046488,77.3499898 C118.569011,77.3499898 122.075305,79.473106 124.751864,83.902381 C124.93577,84.1795344 125.120539,84.2710554 125.397692,84.2710554 C125.582461,84.2710554 125.858751,84.1795344 125.951136,83.9947654 C131.395777,79.8417806 136.840418,77.3499898 140.439096,77.3499898 C149.021355,77.3499898 154.097321,83.717612 154.097321,94.5145092 C154.097321,97.5597436 154.097321,101.527959 154.004937,105.127501 C154.004937,108.356641 153.912553,111.310354 153.912553,113.432607 C153.912553,113.893666 154.558381,115.370091 155.573746,115.647244 C156.865402,116.293072 158.618981,116.570226 160.926003,116.9389 L161.018387,116.9389 C161.203156,117.584728 160.833618,119.984135 160.464944,120.446057 C159.910637,120.446057 159.08004,120.446057 158.157922,120.353673 C156.404343,120.261288 153.912553,120.168904 151.144472,120.168904 C145.422677,120.168904 142.469827,120.261288 139.608499,120.446057 C139.424593,119.707845 139.332208,117.493207 139.608499,116.9389 C141.269692,116.66261 142.100289,116.385457 143.115655,116.108303 C144.961618,115.55486 145.422677,114.724263 145.515062,112.324856 C145.515062,110.572141 145.883736,95.6222596 145.330293,92.0227182 C144.776849,88.3316558 142.007905,83.9947654 135.917436,83.9947654 C133.610414,83.9947654 130.011736,84.9177468 126.504579,87.5934434 C126.320674,87.7782124 126.135905,88.2392714 126.135905,88.5164248 L126.135905,88.6088092 C126.504579,90.5462932 126.504579,92.7617942 126.504579,96.175703 L126.504579,102.173787 C126.504579,106.326772 126.412195,110.202604 126.504579,113.155453 C126.504579,115.186185 127.704714,115.647244 128.72008,116.016782 C129.273524,116.108303 129.642198,116.200688 130.104121,116.293072 C130.934718,116.477841 131.765315,116.66261 133.056971,116.9389 C133.24174,117.308438 133.24174,118.50771 132.964586,119.523076 C132.872202,120.076519 132.687433,120.353673 132.595912,120.446057 C129.458293,120.353673 126.228289,120.261288 121.521861,120.261288 C120.137821,120.261288 117.738414,120.353673 115.707682,120.353673 C114.046488,120.353673 112.477679,120.446057 111.555561,120.446057 C111.463176,120.261288 111.278407,119.61546 111.278407,118.600094 C111.278407,117.769497 111.463176,117.123669 111.647945,116.9389 C112.109004,116.846516 112.477679,116.754995 112.939601,116.754995 C114.046488,116.570226 114.96947,116.385457 115.892451,116.200688 C117.461261,115.739629 118.014704,114.909032 118.107089,112.879163 C118.384242,108.26512 118.660532,95.068816 118.014704,91.7464282 C116.907817,86.3941718 113.862583,83.717612 108.971386,83.717612 C106.11092,83.717612 102.511379,85.1016524 99.558529,87.3171532 C99.0974698,87.6858278 98.727932,88.6088092 98.727932,89.4394062 L98.727932,94.884047 C98.727932,101.527959 98.727932,109.833929 98.8203164,113.432607 C98.912701,114.539494 99.2813754,115.832013 101.404492,116.293072 C101.865551,116.385457 102.603763,116.570226 103.526745,116.66261 L105.187939,116.9389 C105.372708,117.493207 105.280323,119.707845 104.910785,120.446057 C103.987804,120.446057 102.880917,120.353673 101.588397,120.353673 C99.6509134,120.261288 97.1591224,120.168904 94.3910416,120.168904 C91.1610382,120.168904 88.8540162,120.261288 87.0080534,120.353673 C85.7163974,120.168904 84.7010314,120.168904 83.5941444,120.168904 L83.5941444,120.168904 L83.5941444,120.168904 Z" fill="#442D22"></path>
                    <g>
                        <path d="M35.0534362,142.317005 L31.2699893,141.024486 C31.2699893,141.024486 31.7319117,121.737713 24.8108459,120.353673 C20.1968021,115.001416 25.5490584,-106.659184 42.1592709,119.61546 C42.1592709,119.61546 36.43834,122.475926 35.4229741,127.367123 C34.3152237,132.165936 35.0534362,142.317005 35.0534362,142.317005 L35.0534362,142.317005 L35.0534362,142.317005 Z" fill="#FFFFFF"></path>
                        <path d="M35.0534362,142.317005 L31.2699893,141.024486 C31.2699893,141.024486 31.7319117,121.737713 24.8108459,120.353673 C20.1968021,115.001416 25.5490584,-106.659184 42.1592709,119.61546 C42.1592709,119.61546 36.43834,122.475926 35.4229741,127.367123 C34.3152237,132.165936 35.0534362,142.317005 35.0534362,142.317005 L35.0534362,142.317005 L35.0534362,142.317005 Z" fill="#A6A385"></path>
                        <path d="M37.0841679,123.676061 C37.0841679,123.676061 70.2130718,101.897497 62.461409,56.5867926 C54.9868998,23.6426576 37.360458,12.8457605 35.422974,8.69277572 C33.3007211,5.7399258 31.2699892,0.572438448 31.2699892,0.572438448 L32.6548931,92.2074874 C32.6548931,92.2998718 29.7935642,120.261288 37.0841679,123.676061" fill="#FFFFFF"></path>
                        <path d="M37.0841679,123.676061 C37.0841679,123.676061 70.2130718,101.897497 62.461409,56.5867926 C54.9868998,23.6426576 37.360458,12.8457605 35.422974,8.69277572 C33.3007211,5.7399258 31.2699892,0.572438448 31.2699892,0.572438448 L32.6548931,92.2074874 C32.6548931,92.2998718 29.7935642,120.261288 37.0841679,123.676061" fill="#499D4A"></path>
                        <path d="M29.332506,124.875332 C29.332506,124.875332 -1.76652951,103.650212 0.0794333896,66.2768026 C1.8321484,28.9025296 23.7954806,10.5387386 28.0399866,7.21635076 C30.8089308,4.26350084 30.9013154,3.15575042 31.0860844,0.202900506 C33.0235682,4.35588532 32.6548938,62.3085868 32.9311838,69.1372682 C33.7617808,95.4374908 31.4547588,119.892614 29.332506,124.875332 L29.332506,124.875332 L29.332506,124.875332 Z" fill="#FFFFFF"></path>
                        <path d="M29.332506,124.875332 C29.332506,124.875332 -1.76652951,103.650212 0.0794333896,66.2768026 C1.8321484,28.9025296 23.7954806,10.5387386 28.0399866,7.21635076 C30.8089308,4.26350084 30.9013154,3.15575042 31.0860844,0.202900506 C33.0235682,4.35588532 32.6548938,62.3085868 32.9311838,69.1372682 C33.7617808,95.4374908 31.4547588,119.892614 29.332506,124.875332 L29.332506,124.875332 L29.332506,124.875332 Z" fill="#58AA50"></path>
                    </g>
                </g>
            </g>
        </svg.SVG>


    )
}
export default mongo
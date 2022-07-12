import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
        className="overflow-hidden rounded-md drop-shadow-lg transition duration-300"
      >
        <rect width="1920" height="1080" fill="#3ab0ff"></rect>
        <g clipPath='url("#SvgjsClipPath2317")'>
          <g transform="matrix(0.73920575113952,-0.8809511095868248,0.8809511095868248,0.73920575113952,-229.40323638068276,972.8540956924237)">
            <path
              d="M0,-1080C-5.071339197697003,-972.559966112646,-35.89511872105659,-651.3501142523669,-30.42803518618202,-435.359796675876C-24.960951651307443,-219.36947909938513,28.290337231229792,0.9409547890988676,32.80250120924745,215.9419054589453C37.31466518726511,430.94285612879173,6.058725862089407,643.3589013370237,-3.3550513180760504,854.6459073432027C-12.768828498241508,1065.9329133493816,-24.239337091424634,1266.1049260532195,-23.68016187174529,1483.663941496019C-23.120986652065948,1701.2229569388187,-3.946693645290882,2047.2773235826699,0,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2307")'
            ></path>
            <path
              d="M192,-1080C186.6604306025312,-947.9583708171768,161.65558102340083,-551.5194718666846,159.96258361518716,-287.7502249030612C158.26958620697349,-23.980977939437764,180.92086280240315,225.27174376463597,181.84201555071797,502.6154817817408C182.7631682990328,779.9592197988457,163.7965026968625,1100.0814501631912,165.48950010507616,1376.3122031995679C167.18249751328983,1652.5429562359445,187.58158335084602,2029.385367199928,192,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2308")'
            ></path>
            <path
              d="M384,-1080C378.6614872888342,-938.2068671671353,353.7887546050754,-498.5179498884429,351.96892373300545,-229.24120300281214C350.1490928609355,40.035543882818615,372.04097139557143,276.3154149333895,373.08101476758026,535.6604813137848C374.1210581395891,795.00554769418,356.3893530929886,1056.1059421651903,358.2091839650585,1326.8291952795596C360.02901483712844,1597.552448393929,379.7015306608431,2021.13819921326,384,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2309")'
            ></path>
            <path
              d="M576,-1080C570.5920026962852,-970.4718787107145,537.961256713216,-640.9075554312822,543.5520161777117,-422.8312722642868C549.1427756422074,-204.75498909729143,608.2552562943634,19.57835241010457,609.5445567869742,228.45769900197214C610.833857279585,437.3370455938397,557.3550324868456,618.2893679377532,551.2878191333763,830.4448072869186C545.2206057799069,1042.600246636084,569.0225798550541,1279.7978029781175,573.1412766661581,1501.3903350969645C577.2599734772621,1722.9828672158114,575.5235461110263,2050.2317225161605,576,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2310")'
            ></path>
            <path
              d="M768,-1080C769.198732600378,-941.3281244307171,777.4623428828726,-520.9315853217787,775.1923956022677,-247.96874658430258C772.9224483216627,24.99409215317357,751.385403235514,290.2246342610236,754.3803163163706,557.7770324248569C757.3752293972271,825.3294305886902,790.8919268068022,1090.3084811361734,793.1618740874071,1357.3456423986972C795.431821368012,1624.382803661221,772.1936456812346,2026.2242737331162,768,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2311")'
            ></path>
            <path
              d="M960,-1080C964.452973633358,-991.367253284733,987.4762953476668,-726.6465522439637,986.7178418001483,-548.2035197083981C985.9593882526299,-369.7604871728324,961.5376394391028,-185.55309054278766,955.4492787148893,-9.341804786606286C949.3609179906757,166.8694809695751,951.7325107826323,325.02380533489657,950.1876774548674,509.06419482869023C948.6428441271025,693.1045843224839,943.8240655800553,908.7779564265754,946.1802787483,1094.9005321761556C948.5364919165447,1281.0231079257358,962.0216695890523,1448.2830713555306,964.3249564643356,1625.7996493261714C966.628243339619,1803.3162272968123,960.7208260773892,2070.9666082210288,960,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2312")'
            ></path>
            <path
              d="M1152,-1080C1152.0656051568951,-988.9868265099291,1152.3923087248884,-717.1639482781721,1152.3936309413712,-533.9209590595742C1152.394953157854,-350.6779698409763,1156.8069664781615,-162.57417688366564,1152.007933298897,19.457935311587285C1147.2089001196323,201.4900475068402,1117.5997929910973,383.3738037417821,1123.5994318657843,558.2717141119433C1129.5990707404712,733.1696244821045,1189.4235535268988,895.5207409658651,1188.005766547018,1068.8453975325542C1186.5879795671374,1242.1700540992433,1121.0936710776696,1416.3605531008368,1115.0927099864998,1598.2196535120777C1109.09174889533,1780.0787539233186,1145.84878499775,2066.369942252013,1152,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2313")'
            ></path>
            <path
              d="M1344,-1080C1350.7765285956602,-1016.2279709594782,1389.1017611683208,-829.9548079641861,1384.6591715739614,-697.367825756869C1380.216581979602,-564.780843549552,1328.0143799801226,-421.22432189307904,1317.3444624338445,-284.47810675609725C1306.6745448875663,-147.7318916191155,1313.3047678622866,-9.088208967819199,1320.6396662962932,123.10946506502155C1327.9745647302998,255.30713909786232,1358.896464994332,372.7103594205241,1361.3538530378844,508.7079374409473C1363.8112410814367,644.7055154613705,1344.858372636857,796.4704783891438,1335.3839945576076,939.094933187561C1325.9096164783582,1081.7193879859783,1304.035393802964,1223.3856527366022,1304.5075845623885,1364.4546662314506C1304.979775321813,1505.523679726299,1331.6350698745516,1652.9181251952266,1338.2171391141535,1785.5090141566516C1344.7992083537554,1918.0999031180766,1343.0361898523588,2097.5848356927754,1344,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2314")'
            ></path>
            <path
              d="M1536,-1080C1533.018757552866,-969.1304282687632,1516.8252487306258,-631.025626828494,1518.1125453171962,-414.7825696125796C1519.3998419037666,-198.5395123966653,1541.671794176609,-2.102095250322691,1543.7237795194226,217.45834329548597C1545.7757648622362,437.01878184129464,1536.4299562168792,691.3974629029157,1530.4244573740782,902.5800616622724C1524.4189585312772,1113.7626604216293,1506.7615293582962,1274.983946128672,1507.6907864626166,1484.5539358516266C1508.620043566937,1694.1239255745813,1531.2817977437694,2047.4256559752712,1536,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2315")'
            ></path>
            <path
              d="M1728,-1080C1733.0085461136796,-988.272510586729,1759.5174986501697,-712.7919674822926,1758.051276682078,-529.6350635203739C1756.5850547139862,-346.4781595584552,1723.9108914378548,-152.99153798610996,1719.202668191449,18.9414237715122C1714.4944449450431,190.87438552913437,1723.3204474246595,327.4222374973333,1729.8019372036426,501.96270702535907C1736.2834269826258,676.5031765533848,1763.5718684336875,878.0250230948185,1758.0916068653482,1066.184240939667C1752.611345297009,1254.3434587845154,1701.9356356044987,1448.6153875843945,1696.9203677936073,1630.91801409445C1691.905099982716,1813.2206406045054,1722.8200612989344,2071.8196690157415,1728,2160L 1920 2160 L 1920 -1080 Z"
              fill='url("#SvgjsLinearGradient2316")'
            ></path>
          </g>
        </g>
        <defs>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2307"
          >
            <stop stopColor="#3ab0ff" offset="0"></stop>
            <stop stopColor="#3ad1ff" offset="0"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2308"
          >
            <stop stopColor="#4fb8ff" offset="0"></stop>
            <stop stopColor="#4fd5ff" offset="0.1"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2309"
          >
            <stop stopColor="#64c1ff" offset="0"></stop>
            <stop stopColor="#64dbff" offset="0.2"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2310"
          >
            <stop stopColor="#79c9ff" offset="0"></stop>
            <stop stopColor="#79dfff" offset="0.3"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2311"
          >
            <stop stopColor="#8ed2ff" offset="0"></stop>
            <stop stopColor="#8ee5ff" offset="0.4"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2312"
          >
            <stop stopColor="#a3daff" offset="0"></stop>
            <stop stopColor="#a3e9ff" offset="0.5"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2313"
          >
            <stop stopColor="#b8e3ff" offset="0"></stop>
            <stop stopColor="#b8efff" offset="0.6"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2314"
          >
            <stop stopColor="#cdebff" offset="0"></stop>
            <stop stopColor="#cdf3ff" offset="0.7"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2315"
          >
            <stop stopColor="#e2f4ff" offset="0"></stop>
            <stop stopColor="#e2f9ff" offset="0.8"></stop>
          </linearGradient>
          <linearGradient
            x1="0.1"
            y1="0"
            x2="0"
            y2="1"
            id="SvgjsLinearGradient2316"
          >
            <stop stopColor="#f7fcff" offset="0"></stop>
            <stop stopColor="#f7fdff" offset="0.9"></stop>
          </linearGradient>
          <clipPath id="SvgjsClipPath2317">
            <rect width="1920" height="1080"></rect>
          </clipPath>
        </defs>
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };

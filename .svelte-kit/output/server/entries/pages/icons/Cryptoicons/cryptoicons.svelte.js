import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index-584434b3.js";
import { C as Card } from "../../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../../chunks/CardBody-1c493a94.js";
import { C as CardHeader } from "../../../../chunks/CardHeader-84e061db.js";
import { C as Col } from "../../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../../chunks/Container-157811c5.js";
import "../../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../../chunks/Row-089822f8.js";
import { B as BreadCrumb } from "../../../../chunks/BreadCrumb-c1da1747.js";
import { a as aave, n as neo } from "../../../../chunks/aave-961ba45c.js";
import { c as ada, l as add, b as ant, t as ark, i as arn, n as atm, o as bcbc, h as bela, q as bix, k as cs, e as eur, g as gbp, j as jpy, m as mkr, d as mln, p as ppt, r as rise, s as sol, v as vtc, a as xpm, x as xrp, f as xsg, y as yfi } from "../../../../chunks/ark-1864eee7.js";
import { b as bnb, e as etc, u as usdt } from "../../../../chunks/usdt-bb1667f7.js";
import { b as btc, l as ltc } from "../../../../chunks/ltc-734c3a3e.js";
import { d as dash } from "../../../../chunks/dash-a9bce606.js";
import { d as doge } from "../../../../chunks/doge-aae7bd6c.js";
import { d as dot, f as fil, x as xmr } from "../../../../chunks/dot-814d6ec7.js";
import { e as eth } from "../../../../chunks/eth-105a4f91.js";
var pac = "/_app/assets/$pac-9875430e.svg";
var c0xbtc = "/_app/assets/0xbtc-edf32cd2.svg";
var c2give = "/_app/assets/2give-95a26949.svg";
var abt = "/_app/assets/abt-8171ed59.svg";
var act = "/_app/assets/act-e9e8faa7.svg";
var actn = "/_app/assets/actn-6b0931cf.svg";
var ae = "/_app/assets/ae-571046d8.svg";
var aeon = "/_app/assets/aeon-dd442629.svg";
var aeur = "/_app/assets/aeur-2bd04d55.svg";
var agi = "/_app/assets/agi-041dddaa.svg";
var agrs = "/_app/assets/agrs-4b7be230.svg";
var aion = "/_app/assets/aion-fd332434.svg";
var algo = "/_app/assets/algo-40e5b485.svg";
var amb = "/_app/assets/amb-2d81015c.svg";
var amp = "/_app/assets/amp-2fb1bec9.svg";
var ampl = "/_app/assets/ampl-3f495858.svg";
var ankr = "/_app/assets/ankr-10932c8c.svg";
var apex = "/_app/assets/apex-6f3c3fed.svg";
var appc = "/_app/assets/appc-44eceb0b.svg";
var ardr = "/_app/assets/ardr-b94612e3.svg";
var arg = "/_app/assets/arg-88c97fbc.svg";
var arnx = "/_app/assets/arnx-4959e767.svg";
var ary = "/_app/assets/ary-e8520a89.svg";
var ast = "/_app/assets/ast-9c375ce5.svg";
var atom = "/_app/assets/atom-e4ad7c3b.svg";
var audr = "/_app/assets/audr-95e318a0.svg";
var auto = "/_app/assets/auto-a60ff6cc.svg";
var aywa = "/_app/assets/aywa-719e5512.svg";
var bab = "/_app/assets/bab-e944b363.svg";
var bal = "/_app/assets/bal-2fec2636.svg";
var band = "/_app/assets/band-b897d837.svg";
var bat = "/_app/assets/bat-bd91e570.svg";
var bay = "/_app/assets/bay-09cbb10d.svg";
var bcc = "/_app/assets/bcc-095bef12.svg";
var bcd = "/_app/assets/bcd-4fb89081.svg";
var bch = "/_app/assets/bch-b4067ef1.svg";
var bcio = "/_app/assets/bcio-0b80ba5f.svg";
var bcn = "/_app/assets/bcn-e0325cc5.svg";
var bco = "/_app/assets/bco-1960cae2.svg";
var bcpt = "/_app/assets/bcpt-392cf040.svg";
var bdl = "/_app/assets/bdl-afd24850.svg";
var beam = "/_app/assets/beam-2e111b37.svg";
var blcn = "/_app/assets/blcn-fce92aeb.svg";
var blk = "/_app/assets/blk-4dc7b58a.svg";
var block = "/_app/assets/block-096f7de4.svg";
var blz = "/_app/assets/blz-9044d6a4.svg";
var bnt = "/_app/assets/bnt-b071fea0.svg";
var bnty = "/_app/assets/bnty-4eb2a641.svg";
var booty = "/_app/assets/booty-f01e08f2.svg";
var bos = "/_app/assets/bos-fa11da60.svg";
var bpt = "/_app/assets/bpt-9aa09d6e.svg";
var bq = "/_app/assets/bq-0f827fad.svg";
var brd = "/_app/assets/brd-9b9912f3.svg";
var bsd = "/_app/assets/bsd-a0b497a6.svg";
var bsv = "/_app/assets/bsv-6523fceb.svg";
var btcd = "/_app/assets/btcd-92c094dc.svg";
var btch = "/_app/assets/btch-1fd2e6b3.svg";
var btcp = "/_app/assets/btcp-bf73e9b3.svg";
var btcz = "/_app/assets/btcz-b4a697a0.svg";
var btdx = "/_app/assets/btdx-1ecfc566.svg";
var btg = "/_app/assets/btg-3b70473c.svg";
var btm = "/_app/assets/btm-d4364c15.svg";
var bts = "/_app/assets/bts-30d07bc1.svg";
var btt = "/_app/assets/btt-4c0d670e.svg";
var btx = "/_app/assets/btx-8e312924.svg";
var burst = "/_app/assets/burst-6faeef83.svg";
var bze = "/_app/assets/bze-9a24b694.svg";
var call = "/_app/assets/call-6d22b71f.svg";
var cc = "/_app/assets/cc-905a25dc.svg";
var cdn = "/_app/assets/cdn-659af2ac.svg";
var cdt = "/_app/assets/cdt-228e2604.svg";
var cenz = "/_app/assets/cenz-b2da98b0.svg";
var chain = "/_app/assets/chain-7cbefc11.svg";
var chat = "/_app/assets/chat-00df110c.svg";
var chips = "/_app/assets/chips-16a8c2cc.svg";
var chsb = "/_app/assets/chsb-f1f74d25.svg";
var cix = "/_app/assets/cix-e24c5dcb.svg";
var clam = "/_app/assets/clam-d967874c.svg";
var cloak = "/_app/assets/cloak-98a1acb4.svg";
var cmm = "/_app/assets/cmm-a173f17d.svg";
var cmt = "/_app/assets/cmt-4ae871c9.svg";
var cnd = "/_app/assets/cnd-10245d97.svg";
var cnx = "/_app/assets/cnx-84aa440d.svg";
var cny = "/_app/assets/cny-88492f5a.svg";
var cob = "/_app/assets/cob-d88addea.svg";
var colx = "/_app/assets/colx-00bbe448.svg";
var comp = "/_app/assets/comp-9e1d0804.svg";
var coqui = "/_app/assets/coqui-773f4d11.svg";
var cred = "/_app/assets/cred-0470da8c.svg";
var crpt = "/_app/assets/crpt-ccbff010.svg";
var crv = "/_app/assets/crv-cbdd5669.svg";
var crw = "/_app/assets/crw-d9a452c3.svg";
var ctr = "/_app/assets/ctr-1dc59348.svg";
var ctxc = "/_app/assets/ctxc-cb02c5c1.svg";
var cvc = "/_app/assets/cvc-4da7a427.svg";
var d = "/_app/assets/d-8735d195.svg";
var dai = "/_app/assets/dai-030fdb32.svg";
var dat = "/_app/assets/dat-679ae8e3.svg";
var data = "/_app/assets/data-74f2af4a.svg";
var dbc = "/_app/assets/dbc-75173508.svg";
var dcn = "/_app/assets/dcn-fdde2a0f.svg";
var dcr = "/_app/assets/dcr-7286a68e.svg";
var deez = "/_app/assets/deez-a7007fa3.svg";
var dent = "/_app/assets/dent-7388ab42.svg";
var dew = "/_app/assets/dew-a0ba2825.svg";
var dgb = "/_app/assets/dgb-a03704cb.svg";
var dgd = "/_app/assets/dgd-ccad87a0.svg";
var dlt = "/_app/assets/dlt-5d0e4f77.svg";
var dnt = "/_app/assets/dnt-60c8a952.svg";
var dock = "/_app/assets/dock-027aad13.svg";
var drgn = "/_app/assets/drgn-e49e3b37.svg";
var drop = "/_app/assets/drop-f1091a1e.svg";
var dta = "/_app/assets/dta-64f5c8ca.svg";
var dth = "/_app/assets/dth-3122eeaf.svg";
var dtr = "/_app/assets/dtr-521391ac.svg";
var ebst = "/_app/assets/ebst-800f9e3c.svg";
var eca = "/_app/assets/eca-dcb1dcd4.svg";
var edg = "/_app/assets/edg-38511203.svg";
var edo = "/_app/assets/edo-5e90fcd9.svg";
var edoge = "/_app/assets/edoge-58641d40.svg";
var ela = "/_app/assets/ela-38ccef5e.svg";
var elec = "/_app/assets/elec-a53cc1fb.svg";
var elf = "/_app/assets/elf-582c5199.svg";
var elix = "/_app/assets/elix-0e4a7785.svg";
var ella = "/_app/assets/ella-9915ba20.svg";
var emb = "/_app/assets/emb-cf694dc6.svg";
var emc = "/_app/assets/emc-11671d8f.svg";
var emc2 = "/_app/assets/emc2-5261289a.svg";
var eng = "/_app/assets/eng-6e7af5d6.svg";
var enj = "/_app/assets/enj-c79f3fe0.svg";
var entrp = "/_app/assets/entrp-1de3e16b.svg";
var eon = "/_app/assets/eon-6445e654.svg";
var eop = "/_app/assets/eop-2f5f3f5b.svg";
var eos = "/_app/assets/eos-079834a1.svg";
var eqli = "/_app/assets/eqli-e7bb036f.svg";
var equa = "/_app/assets/equa-d18f19b6.svg";
var ethos = "/_app/assets/ethos-3c01677c.svg";
var etn = "/_app/assets/etn-c15cd745.svg";
var etp = "/_app/assets/etp-442536de.svg";
var evx = "/_app/assets/evx-5b0f1cac.svg";
var exmo = "/_app/assets/exmo-3367cad1.svg";
var exp = "/_app/assets/exp-74822280.svg";
var fair = "/_app/assets/fair-48cd2fec.svg";
var fct = "/_app/assets/fct-d43e466f.svg";
var fjc = "/_app/assets/fjc-5605c54a.svg";
var fldc = "/_app/assets/fldc-26de774e.svg";
var flo = "/_app/assets/flo-7805db65.svg";
var flux = "/_app/assets/flux-df20e229.svg";
var fsn = "/_app/assets/fsn-9a3ca885.svg";
var ftc = "/_app/assets/ftc-7dab1723.svg";
var fuel = "/_app/assets/fuel-8e3e00cd.svg";
var fun = "/_app/assets/fun-f937ebe3.svg";
var game = "/_app/assets/game-2fff9be5.svg";
var gas = "/_app/assets/gas-e6975772.svg";
var gbx = "/_app/assets/gbx-b70b1563.svg";
var gbyte = "/_app/assets/gbyte-95f939ce.svg";
var generic = "/_app/assets/generic-6884416a.svg";
var gin = "/_app/assets/gin-b4ad0017.svg";
var glxt = "/_app/assets/glxt-98ccc4f3.svg";
var gmr = "/_app/assets/gmr-d1577953.svg";
var gno = "/_app/assets/gno-7494440b.svg";
var gnt = "/_app/assets/gnt-0e8bac46.svg";
var gold = "/_app/assets/gold-cc73c6cb.svg";
var grc = "/_app/assets/grc-13c441ef.svg";
var grin = "/_app/assets/grin-f1fabf21.svg";
var grs = "/_app/assets/grs-78601421.svg";
var grt = "/_app/assets/grt-facbee95.svg";
var gsc = "/_app/assets/gsc-125e8418.svg";
var gto = "/_app/assets/gto-cbd01929.svg";
var gup = "/_app/assets/gup-15033fe1.svg";
var gusd = "/_app/assets/gusd-03512df3.svg";
var gvt = "/_app/assets/gvt-4df58ab8.svg";
var gxs = "/_app/assets/gxs-ca2774b6.svg";
var gzr = "/_app/assets/gzr-64dce2ff.svg";
var hight = "/_app/assets/hight-fa786847.svg";
var hns = "/_app/assets/hns-4e87aa83.svg";
var hodl = "/_app/assets/hodl-56047255.svg";
var hot = "/_app/assets/hot-e9b405b8.svg";
var hpb = "/_app/assets/hpb-172875ce.svg";
var hsr = "/_app/assets/hsr-a66fb97b.svg";
var ht = "/_app/assets/ht-8ce855b4.svg";
var html = "/_app/assets/html-cbbb0462.svg";
var huc = "/_app/assets/huc-1f4a7a46.svg";
var husd = "/_app/assets/husd-a93c2de6.svg";
var hush = "/_app/assets/hush-6425140f.svg";
var icn = "/_app/assets/icn-e160635a.svg";
var icp = "/_app/assets/icp-891f685f.svg";
var icx = "/_app/assets/icx-1d46f55b.svg";
var ignis = "/_app/assets/ignis-04d32748.svg";
var ilk = "/_app/assets/ilk-87b9326f.svg";
var ink = "/_app/assets/ink-dc107664.svg";
var ins = "/_app/assets/ins-16e377f4.svg";
var ion = "/_app/assets/ion-2c152afd.svg";
var iop = "/_app/assets/iop-343c6e70.svg";
var iost = "/_app/assets/iost-7df268d6.svg";
var iotx = "/_app/assets/iotx-217a65d2.svg";
var iq = "/_app/assets/iq-90aaf26e.svg";
var itc = "/_app/assets/itc-5178be6e.svg";
var jnt = "/_app/assets/jnt-e394f33b.svg";
var kcs = "/_app/assets/kcs-78441036.svg";
var kin = "/_app/assets/kin-d0f72718.svg";
var klown = "/_app/assets/klown-4eb63ad0.svg";
var kmd = "/_app/assets/kmd-e38c315f.svg";
var knc = "/_app/assets/knc-2ad3c9c9.svg";
var krb = "/_app/assets/krb-40dc3045.svg";
var ksm = "/_app/assets/ksm-7833f4d0.svg";
var lbc = "/_app/assets/lbc-5277ca09.svg";
var lend = "/_app/assets/lend-49c72603.svg";
var leo = "/_app/assets/leo-ceed3845.svg";
var link = "/_app/assets/link-2457990f.svg";
var lkk = "/_app/assets/lkk-051f9919.svg";
var loom = "/_app/assets/loom-821a0736.svg";
var lpt = "/_app/assets/lpt-2af4904a.svg";
var lrc = "/_app/assets/lrc-38865546.svg";
var lsk = "/_app/assets/lsk-e76166ab.svg";
var lun = "/_app/assets/lun-251d3fd2.svg";
var maid = "/_app/assets/maid-4db02edf.svg";
var mana = "/_app/assets/mana-9bcdb5ee.svg";
var matic = "/_app/assets/matic-479d03ee.svg";
var max = "/_app/assets/max-a94c3b53.svg";
var mcap = "/_app/assets/mcap-e707edcf.svg";
var mco = "/_app/assets/mco-d597ffb8.svg";
var mda = "/_app/assets/mda-3d505f65.svg";
var mds = "/_app/assets/mds-94314a7a.svg";
var med = "/_app/assets/med-d2d83fd6.svg";
var meetone = "/_app/assets/meetone-93a93703.svg";
var mft = "/_app/assets/mft-b24c065c.svg";
var miota = "/_app/assets/miota-e5285b57.svg";
var mith = "/_app/assets/mith-e11e5cf8.svg";
var mnx = "/_app/assets/mnx-14f54814.svg";
var mnz = "/_app/assets/mnz-d4ffd264.svg";
var moac = "/_app/assets/moac-03f04558.svg";
var mod = "/_app/assets/mod-f57a482b.svg";
var mona = "/_app/assets/mona-399b5fce.svg";
var msr = "/_app/assets/msr-5975cf33.svg";
var mth = "/_app/assets/mth-16a4076c.svg";
var mtl = "/_app/assets/mtl-3077ad7f.svg";
var music = "/_app/assets/music-6d4fe456.svg";
var mzc = "/_app/assets/mzc-82c85b2a.svg";
var nano = "/_app/assets/nano-1976d994.svg";
var nas = "/_app/assets/nas-2f0f4292.svg";
var nav = "/_app/assets/nav-8adf6a2b.svg";
var ncash = "/_app/assets/ncash-62f81811.svg";
var ndz = "/_app/assets/ndz-14b3c743.svg";
var nebl = "/_app/assets/nebl-35dd172d.svg";
var neos = "/_app/assets/neos-5689753d.svg";
var neu = "/_app/assets/neu-2802e958.svg";
var nexo = "/_app/assets/nexo-70bc41d5.svg";
var ngc = "/_app/assets/ngc-62990527.svg";
var nio = "/_app/assets/nio-27de4b4c.svg";
var nkn = "/_app/assets/nkn-4f8378d4.svg";
var nlc2 = "/_app/assets/nlc2-de64c8e3.svg";
var nlg = "/_app/assets/nlg-dfbd4212.svg";
var nmc = "/_app/assets/nmc-98b16b21.svg";
var nmr = "/_app/assets/nmr-f5e5b0ac.svg";
var npxs = "/_app/assets/npxs-2b81c5e3.svg";
var ntbc = "/_app/assets/ntbc-3f51a45a.svg";
var nuls = "/_app/assets/nuls-c1ea0fd3.svg";
var nxs = "/_app/assets/nxs-d38aa711.svg";
var nxt = "/_app/assets/nxt-1b6eee44.svg";
var oax = "/_app/assets/oax-5012d6e0.svg";
var ok = "/_app/assets/ok-e3ad09de.svg";
var omg = "/_app/assets/omg-21e62ed0.svg";
var omni = "/_app/assets/omni-e2583dbe.svg";
var one = "/_app/assets/one-15fe6ed4.svg";
var ong = "/_app/assets/ong-75b47358.svg";
var ont = "/_app/assets/ont-c0b36726.svg";
var oot = "/_app/assets/oot-3c1ff2ee.svg";
var ost = "/_app/assets/ost-5d760121.svg";
var ox = "/_app/assets/ox-36f6f3b2.svg";
var oxt = "/_app/assets/oxt-cac37c89.svg";
var part = "/_app/assets/part-1a3aaa7e.svg";
var pasc = "/_app/assets/pasc-4c099120.svg";
var pasl = "/_app/assets/pasl-81371e97.svg";
var pax = "/_app/assets/pax-ba0f1136.svg";
var paxg = "/_app/assets/paxg-64cb8bc6.svg";
var pay = "/_app/assets/pay-16daa914.svg";
var payx = "/_app/assets/payx-c2724adc.svg";
var pink = "/_app/assets/pink-a406c581.svg";
var pirl = "/_app/assets/pirl-9a25f7e5.svg";
var pivx = "/_app/assets/pivx-a53aa311.svg";
var plr = "/_app/assets/plr-476368e3.svg";
var poa = "/_app/assets/poa-b4726ab4.svg";
var poe = "/_app/assets/poe-4e3e93fc.svg";
var polis = "/_app/assets/polis-904d0c70.svg";
var poly = "/_app/assets/poly-ecdb9900.svg";
var pot = "/_app/assets/pot-df7288db.svg";
var powr = "/_app/assets/powr-0a74bb27.svg";
var ppc = "/_app/assets/ppc-19d78e00.svg";
var ppp = "/_app/assets/ppp-81b3ec13.svg";
var pre = "/_app/assets/pre-d784b79a.svg";
var prl = "/_app/assets/prl-497af9e1.svg";
var pungo = "/_app/assets/pungo-ce36aaed.svg";
var pura = "/_app/assets/pura-253edff5.svg";
var qash = "/_app/assets/qash-4792e8e3.svg";
var qiwi = "/_app/assets/qiwi-15004a0c.svg";
var qlc = "/_app/assets/qlc-5c17f75e.svg";
var qrl = "/_app/assets/qrl-54b8005f.svg";
var qsp = "/_app/assets/qsp-21dea0fd.svg";
var qtum = "/_app/assets/qtum-70adb506.svg";
var r = "/_app/assets/r-f0e7e5e3.svg";
var rads = "/_app/assets/rads-f353c9ad.svg";
var rap = "/_app/assets/rap-76d1825e.svg";
var rcn = "/_app/assets/rcn-347d3e4b.svg";
var rdd = "/_app/assets/rdd-64b8aeda.svg";
var rdn = "/_app/assets/rdn-3d8842bb.svg";
var ren = "/_app/assets/ren-1ef05f8c.svg";
var rep = "/_app/assets/rep-0a801253.svg";
var repv2 = "/_app/assets/repv2-b5a1663d.svg";
var req = "/_app/assets/req-15ec4c2d.svg";
var rhoc = "/_app/assets/rhoc-c02e276b.svg";
var ric = "/_app/assets/ric-0b278a6f.svg";
var rlc = "/_app/assets/rlc-85c22f13.svg";
var rpx = "/_app/assets/rpx-4bb98044.svg";
var rub = "/_app/assets/rub-b224f70c.svg";
var rvn = "/_app/assets/rvn-9bfe0110.svg";
var ryo = "/_app/assets/ryo-0ebf4a79.svg";
var safe = "/_app/assets/safe-dfbc770f.svg";
var safemoon = "/_app/assets/safemoon-f7e00e80.svg";
var sai = "/_app/assets/sai-0dcc5843.svg";
var salt = "/_app/assets/salt-4c527508.svg";
var san = "/_app/assets/san-b607f688.svg";
var sand = "/_app/assets/sand-1441b86c.svg";
var sbd = "/_app/assets/sbd-998475d5.svg";
var sberbank = "/_app/assets/sberbank-ec032ea9.svg";
var sc = "/_app/assets/sc-f921de13.svg";
var shift = "/_app/assets/shift-54621577.svg";
var sib = "/_app/assets/sib-00e73320.svg";
var sin = "/_app/assets/sin-599c861e.svg";
var skl = "/_app/assets/skl-8c8196e6.svg";
var sky = "/_app/assets/sky-e6f16e16.svg";
var slr = "/_app/assets/slr-adf17014.svg";
var sls = "/_app/assets/sls-16418eac.svg";
var smart = "/_app/assets/smart-1d4c200f.svg";
var sngls = "/_app/assets/sngls-f39e03d5.svg";
var snm = "/_app/assets/snm-1397ed15.svg";
var snt = "/_app/assets/snt-95a38ff4.svg";
var snx = "/_app/assets/snx-a76e2f20.svg";
var soc = "/_app/assets/soc-1f5da69b.svg";
var spacehbit = "/_app/assets/spacehbit-67486f28.svg";
var spank = "/_app/assets/spank-606efc60.svg";
var sphtx = "/_app/assets/sphtx-d4b86adf.svg";
var srn = "/_app/assets/srn-d22b0fe8.svg";
var stak = "/_app/assets/stak-4717566e.svg";
var start = "/_app/assets/start-861c1184.svg";
var steem = "/_app/assets/steem-e185167e.svg";
var storj = "/_app/assets/storj-9c5ebc22.svg";
var storm = "/_app/assets/storm-9d72608c.svg";
var stox = "/_app/assets/stox-99e15a38.svg";
var stq = "/_app/assets/stq-ff547029.svg";
var strat = "/_app/assets/strat-ae392ef1.svg";
var stx = "/_app/assets/stx-2c546d73.svg";
var sub = "/_app/assets/sub-ab741b10.svg";
var sumo = "/_app/assets/sumo-992be020.svg";
var sushi = "/_app/assets/sushi-183df6a3.svg";
var sys = "/_app/assets/sys-2c444674.svg";
var taas = "/_app/assets/taas-4a2e6c80.svg";
var tau = "/_app/assets/tau-02107f86.svg";
var tbx = "/_app/assets/tbx-017f1691.svg";
var tel = "/_app/assets/tel-95b2ac78.svg";
var ten = "/_app/assets/ten-c58b3810.svg";
var tern = "/_app/assets/tern-b13ade56.svg";
var tgch = "/_app/assets/tgch-6f969e85.svg";
var theta = "/_app/assets/theta-cf9eb008.svg";
var tix = "/_app/assets/tix-c251995f.svg";
var tkn = "/_app/assets/tkn-383ca665.svg";
var tks = "/_app/assets/tks-4073f48e.svg";
var tnb = "/_app/assets/tnb-4fd4d0f8.svg";
var tnc = "/_app/assets/tnc-4d32c9e2.svg";
var tnt = "/_app/assets/tnt-94d02c16.svg";
var tomo = "/_app/assets/tomo-b5f4d9b0.svg";
var tpay = "/_app/assets/tpay-d1dd06c3.svg";
var trig = "/_app/assets/trig-7cd41b70.svg";
var trtl = "/_app/assets/trtl-c8394e37.svg";
var trx = "/_app/assets/trx-5b6b6483.svg";
var tusd = "/_app/assets/tusd-b24b3264.svg";
var tzc = "/_app/assets/tzc-bfe3cd7c.svg";
var ubq = "/_app/assets/ubq-978de0c1.svg";
var uma = "/_app/assets/uma-ca8856ce.svg";
var uni = "/_app/assets/uni-2a3192f0.svg";
var unity = "/_app/assets/unity-83db03dc.svg";
var usd = "/_app/assets/usd-60c951ed.svg";
var usdc = "/_app/assets/usdc-7281e8ca.svg";
var utk = "/_app/assets/utk-1b3d6a5f.svg";
var veri = "/_app/assets/veri-0b11cebd.svg";
var vet = "/_app/assets/vet-6f5075e4.svg";
var via = "/_app/assets/via-6ac0372d.svg";
var vib = "/_app/assets/vib-1090dba8.svg";
var vibe = "/_app/assets/vibe-679b0bf3.svg";
var vivo = "/_app/assets/vivo-6c94fe39.svg";
var vrc = "/_app/assets/vrc-6244aa9e.svg";
var vrsc = "/_app/assets/vrsc-f0f624c8.svg";
var vtho = "/_app/assets/vtho-dca823d9.svg";
var wabi = "/_app/assets/wabi-6958c3e4.svg";
var wan = "/_app/assets/wan-13eb7048.svg";
var waves = "/_app/assets/waves-296db81a.svg";
var wax = "/_app/assets/wax-b9352d34.svg";
var wbtc = "/_app/assets/wbtc-3a57d25e.svg";
var wgr = "/_app/assets/wgr-974f2fc8.svg";
var wicc = "/_app/assets/wicc-9efe7c6e.svg";
var wings = "/_app/assets/wings-0338d4ba.svg";
var wpr = "/_app/assets/wpr-544678ef.svg";
var wtc = "/_app/assets/wtc-a69d35f5.svg";
var x = "/_app/assets/x-08e8375b.svg";
var xas = "/_app/assets/xas-46862767.svg";
var xbc = "/_app/assets/xbc-603ad356.svg";
var xbp = "/_app/assets/xbp-7af6a42c.svg";
var xby = "/_app/assets/xby-82790bf9.svg";
var xcp = "/_app/assets/xcp-5cd8f956.svg";
var xdn = "/_app/assets/xdn-6123fbc1.svg";
var xem = "/_app/assets/xem-f53aded7.svg";
var xin = "/_app/assets/xin-b6645565.svg";
var xlm = "/_app/assets/xlm-65b92210.svg";
var xmcc = "/_app/assets/xmcc-c6deac9a.svg";
var xmg = "/_app/assets/xmg-63f5a0c1.svg";
var xmo = "/_app/assets/xmo-0c7fad56.svg";
var xmy = "/_app/assets/xmy-dedfe853.svg";
var xp = "/_app/assets/xp-1206a53c.svg";
var xpa = "/_app/assets/xpa-c88d9a9b.svg";
var xpr = "/_app/assets/xpr-185f161a.svg";
var xtz = "/_app/assets/xtz-70dae521.svg";
var xuc = "/_app/assets/xuc-489b4437.svg";
var xvc = "/_app/assets/xvc-6b6c36a7.svg";
var xvg = "/_app/assets/xvg-6ef3ed77.svg";
var xzc = "/_app/assets/xzc-2168d8b3.svg";
var yoyow = "/_app/assets/yoyow-e74e27c9.svg";
var zcl = "/_app/assets/zcl-c0bb98c5.svg";
var zec = "/_app/assets/zec-fa169a9b.svg";
var zel = "/_app/assets/zel-43c998d6.svg";
var zen = "/_app/assets/zen-af8d932b.svg";
var zest = "/_app/assets/zest-ed7850b0.svg";
var zil = "/_app/assets/zil-78eb1dc5.svg";
var zilla = "/_app/assets/zilla-93949322.svg";
var zrx = "/_app/assets/zrx-47b333b1.svg";
const Cryptoicons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Crypto Icons",
        pageTitle: "Icons"
      }, {}, {})}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h5 class="${"card-title mb-1"}">Examples</h5>
                        <p class="${"text-muted mb-0"}">Use <code>&lt;img src=&quot;assets/images/svg/crypto-icons/**.svg&quot;&gt;</code> class.</p>`;
                    }
                  })}
                    ${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, { class: "icon-demo-content" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pac, 0)} alt="${""}" class="${"avatar-xxs"}">
                                    $pac
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", c0xbtc, 0)} alt="${""}" class="${"avatar-xxs"}"> 0xbtc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", c2give, 0)} alt="${""}" class="${"avatar-xxs"}"> 2give
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", aave, 0)} alt="${""}" class="${"avatar-xxs"}"> aave
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", abt, 0)} alt="${""}" class="${"avatar-xxs"}"> abt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", act, 0)} alt="${""}" class="${"avatar-xxs"}"> act
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", actn, 0)} alt="${""}" class="${"avatar-xxs"}"> actn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ada, 0)} alt="${""}" class="${"avatar-xxs"}"> ada
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", add, 0)} alt="${""}" class="${"avatar-xxs"}"> add
                                </div>`;
                            }
                          })}
                            
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ae, 0)} alt="${""}" class="${"avatar-xxs"}"> ae
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", aeon, 0)} alt="${""}" class="${"avatar-xxs"}"> aeon
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", aeur, 0)} alt="${""}" class="${"avatar-xxs"}"> aeur
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", agi, 0)} alt="${""}" class="${"avatar-xxs"}"> agi
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", agrs, 0)} alt="${""}" class="${"avatar-xxs"}"> agrs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", aion, 0)} alt="${""}" class="${"avatar-xxs"}"> aion
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", algo, 0)} alt="${""}" class="${"avatar-xxs"}"> algo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", amb, 0)} alt="${""}" class="${"avatar-xxs"}"> amb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", amp, 0)} alt="${""}" class="${"avatar-xxs"}"> amp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ampl, 0)} alt="${""}" class="${"avatar-xxs"}"> ampl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ankr, 0)} alt="${""}" class="${"avatar-xxs"}"> ankr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ant, 0)} alt="${""}" class="${"avatar-xxs"}"> ant
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", apex, 0)} alt="${""}" class="${"avatar-xxs"}"> apex
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", appc, 0)} alt="${""}" class="${"avatar-xxs"}"> appc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ardr, 0)} alt="${""}" class="${"avatar-xxs"}"> ardr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", arg, 0)} alt="${""}" class="${"avatar-xxs"}"> arg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ark, 0)} alt="${""}" class="${"avatar-xxs"}"> ark
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", arn, 0)} alt="${""}" class="${"avatar-xxs"}"> arn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", arnx, 0)} alt="${""}" class="${"avatar-xxs"}"> arnx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ary, 0)} alt="${""}" class="${"avatar-xxs"}"> ary
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ast, 0)} alt="${""}" class="${"avatar-xxs"}"> ast
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", atm, 0)} alt="${""}" class="${"avatar-xxs"}"> atm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", atom, 0)} alt="${""}" class="${"avatar-xxs"}"> atom
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", audr, 0)} alt="${""}" class="${"avatar-xxs"}"> audr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", auto, 0)} alt="${""}" class="${"avatar-xxs"}"> auto
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", aywa, 0)} alt="${""}" class="${"avatar-xxs"}"> aywa
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bab, 0)} alt="${""}" class="${"avatar-xxs"}"> bab
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bal, 0)} alt="${""}" class="${"avatar-xxs"}"> bal
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", band, 0)} alt="${""}" class="${"avatar-xxs"}"> band
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bat, 0)} alt="${""}" class="${"avatar-xxs"}"> bat
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bay, 0)} alt="${""}" class="${"avatar-xxs"}"> bay
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bcbc, 0)} alt="${""}" class="${"avatar-xxs"}"> bcbc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bcc, 0)} alt="${""}" class="${"avatar-xxs"}"> bcc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bcd, 0)} alt="${""}" class="${"avatar-xxs"}"> bcd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bch, 0)} alt="${""}" class="${"avatar-xxs"}"> bch
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bcio, 0)} alt="${""}" class="${"avatar-xxs"}"> bcio
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bcn, 0)} alt="${""}" class="${"avatar-xxs"}"> bcn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bco, 0)} alt="${""}" class="${"avatar-xxs"}"> bco
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bcpt, 0)} alt="${""}" class="${"avatar-xxs"}"> bcpt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bdl, 0)} alt="${""}" class="${"avatar-xxs"}"> bdl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", beam, 0)} alt="${""}" class="${"avatar-xxs"}"> beam
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bela, 0)} alt="${""}" class="${"avatar-xxs"}"> bela
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bix, 0)} alt="${""}" class="${"avatar-xxs"}"> bix
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", blcn, 0)} alt="${""}" class="${"avatar-xxs"}"> blcn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", blk, 0)} alt="${""}" class="${"avatar-xxs"}"> blk
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", block, 0)} alt="${""}" class="${"avatar-xxs"}"> block
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", blz, 0)} alt="${""}" class="${"avatar-xxs"}"> blz
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bnb, 0)} alt="${""}" class="${"avatar-xxs"}"> bnb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bnt, 0)} alt="${""}" class="${"avatar-xxs"}"> bnt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bnty, 0)} alt="${""}" class="${"avatar-xxs"}"> bnty
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", booty, 0)} alt="${""}" class="${"avatar-xxs"}"> booty
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bos, 0)} alt="${""}" class="${"avatar-xxs"}"> bos
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bpt, 0)} alt="${""}" class="${"avatar-xxs"}"> bpt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bq, 0)} alt="${""}" class="${"avatar-xxs"}"> bq
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", brd, 0)} alt="${""}" class="${"avatar-xxs"}"> brd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bsd, 0)} alt="${""}" class="${"avatar-xxs"}"> bsd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bsv, 0)} alt="${""}" class="${"avatar-xxs"}"> bsv
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btc, 0)} alt="${""}" class="${"avatar-xxs"}"> btc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btcd, 0)} alt="${""}" class="${"avatar-xxs"}"> btcd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btch, 0)} alt="${""}" class="${"avatar-xxs"}"> btch
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btcp, 0)} alt="${""}" class="${"avatar-xxs"}"> btcp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btcz, 0)} alt="${""}" class="${"avatar-xxs"}"> btcz
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btdx, 0)} alt="${""}" class="${"avatar-xxs"}"> btdx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btg, 0)} alt="${""}" class="${"avatar-xxs"}"> btg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btm, 0)} alt="${""}" class="${"avatar-xxs"}"> btm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bts, 0)} alt="${""}" class="${"avatar-xxs"}"> bts
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btt, 0)} alt="${""}" class="${"avatar-xxs"}"> btt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", btx, 0)} alt="${""}" class="${"avatar-xxs"}"> btx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", burst, 0)} alt="${""}" class="${"avatar-xxs"}"> burst
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", bze, 0)} alt="${""}" class="${"avatar-xxs"}"> bze
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", call, 0)} alt="${""}" class="${"avatar-xxs"}"> call
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cc, 0)} alt="${""}" class="${"avatar-xxs"}"> cc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cdn, 0)} alt="${""}" class="${"avatar-xxs"}"> cdn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cdt, 0)} alt="${""}" class="${"avatar-xxs"}"> cdt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cenz, 0)} alt="${""}" class="${"avatar-xxs"}"> cenz
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", chain, 0)} alt="${""}" class="${"avatar-xxs"}"> chain
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", chat, 0)} alt="${""}" class="${"avatar-xxs"}"> chat
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", chips, 0)} alt="${""}" class="${"avatar-xxs"}"> chips
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", chsb, 0)} alt="${""}" class="${"avatar-xxs"}"> chsb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cix, 0)} alt="${""}" class="${"avatar-xxs"}"> cix
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", clam, 0)} alt="${""}" class="${"avatar-xxs"}"> clam
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cloak, 0)} alt="${""}" class="${"avatar-xxs"}"> cloak
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cmm, 0)} alt="${""}" class="${"avatar-xxs"}"> cmm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cmt, 0)} alt="${""}" class="${"avatar-xxs"}"> cmt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cnd, 0)} alt="${""}" class="${"avatar-xxs"}"> cnd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cnx, 0)} alt="${""}" class="${"avatar-xxs"}"> cnx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cny, 0)} alt="${""}" class="${"avatar-xxs"}"> cny
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cob, 0)} alt="${""}" class="${"avatar-xxs"}"> cob
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", colx, 0)} alt="${""}" class="${"avatar-xxs"}"> colx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", comp, 0)} alt="${""}" class="${"avatar-xxs"}"> comp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", coqui, 0)} alt="${""}" class="${"avatar-xxs"}"> coqui
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cred, 0)} alt="${""}" class="${"avatar-xxs"}"> cred
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", crpt, 0)} alt="${""}" class="${"avatar-xxs"}"> crpt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", crv, 0)} alt="${""}" class="${"avatar-xxs"}"> crv
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", crw, 0)} alt="${""}" class="${"avatar-xxs"}"> crw
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cs, 0)} alt="${""}" class="${"avatar-xxs"}"> cs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ctr, 0)} alt="${""}" class="${"avatar-xxs"}"> ctr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ctxc, 0)} alt="${""}" class="${"avatar-xxs"}"> ctxc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", cvc, 0)} alt="${""}" class="${"avatar-xxs"}"> cvc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", d, 0)} alt="${""}" class="${"avatar-xxs"}"> d
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dai, 0)} alt="${""}" class="${"avatar-xxs"}"> dai
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dash, 0)} alt="${""}" class="${"avatar-xxs"}"> dash
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dat, 0)} alt="${""}" class="${"avatar-xxs"}"> dat
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", data, 0)} alt="${""}" class="${"avatar-xxs"}"> data
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dbc, 0)} alt="${""}" class="${"avatar-xxs"}"> dbc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dcn, 0)} alt="${""}" class="${"avatar-xxs"}"> dcn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dcr, 0)} alt="${""}" class="${"avatar-xxs"}"> dcr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", deez, 0)} alt="${""}" class="${"avatar-xxs"}"> deez
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dent, 0)} alt="${""}" class="${"avatar-xxs"}"> dent
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dew, 0)} alt="${""}" class="${"avatar-xxs"}"> dew
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dgb, 0)} alt="${""}" class="${"avatar-xxs"}"> dgb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dgd, 0)} alt="${""}" class="${"avatar-xxs"}"> dgd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dlt, 0)} alt="${""}" class="${"avatar-xxs"}"> dlt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dnt, 0)} alt="${""}" class="${"avatar-xxs"}"> dnt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dock, 0)} alt="${""}" class="${"avatar-xxs"}"> dock
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", doge, 0)} alt="${""}" class="${"avatar-xxs"}"> doge
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dot, 0)} alt="${""}" class="${"avatar-xxs"}"> dot
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", drgn, 0)} alt="${""}" class="${"avatar-xxs"}"> drgn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", drop, 0)} alt="${""}" class="${"avatar-xxs"}"> drop
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dta, 0)} alt="${""}" class="${"avatar-xxs"}"> dta
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dth, 0)} alt="${""}" class="${"avatar-xxs"}"> dth
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", dtr, 0)} alt="${""}" class="${"avatar-xxs"}"> dtr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ebst, 0)} alt="${""}" class="${"avatar-xxs"}"> ebst
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eca, 0)} alt="${""}" class="${"avatar-xxs"}"> eca
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", edg, 0)} alt="${""}" class="${"avatar-xxs"}"> edg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", edo, 0)} alt="${""}" class="${"avatar-xxs"}"> edo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", edoge, 0)} alt="${""}" class="${"avatar-xxs"}"> edoge
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ela, 0)} alt="${""}" class="${"avatar-xxs"}"> ela
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", elec, 0)} alt="${""}" class="${"avatar-xxs"}"> elec
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", elf, 0)} alt="${""}" class="${"avatar-xxs"}"> elf
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", elix, 0)} alt="${""}" class="${"avatar-xxs"}"> elix
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ella, 0)} alt="${""}" class="${"avatar-xxs"}"> ella
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", emb, 0)} alt="${""}" class="${"avatar-xxs"}"> emb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", emc, 0)} alt="${""}" class="${"avatar-xxs"}"> emc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", emc2, 0)} alt="${""}" class="${"avatar-xxs"}"> emc2
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eng, 0)} alt="${""}" class="${"avatar-xxs"}"> eng
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", enj, 0)} alt="${""}" class="${"avatar-xxs"}"> enj
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", entrp, 0)} alt="${""}" class="${"avatar-xxs"}"> entrp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eon, 0)} alt="${""}" class="${"avatar-xxs"}"> eon
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eop, 0)} alt="${""}" class="${"avatar-xxs"}"> eop
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eos, 0)} alt="${""}" class="${"avatar-xxs"}"> eos
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eqli, 0)} alt="${""}" class="${"avatar-xxs"}"> eqli
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", equa, 0)} alt="${""}" class="${"avatar-xxs"}"> equa
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", etc, 0)} alt="${""}" class="${"avatar-xxs"}"> etc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eth, 0)} alt="${""}" class="${"avatar-xxs"}"> eth
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ethos, 0)} alt="${""}" class="${"avatar-xxs"}"> ethos
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", etn, 0)} alt="${""}" class="${"avatar-xxs"}"> etn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", etp, 0)} alt="${""}" class="${"avatar-xxs"}"> etp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", eur, 0)} alt="${""}" class="${"avatar-xxs"}"> eur
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", evx, 0)} alt="${""}" class="${"avatar-xxs"}"> evx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", exmo, 0)} alt="${""}" class="${"avatar-xxs"}"> exmo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", exp, 0)} alt="${""}" class="${"avatar-xxs"}"> exp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fair, 0)} alt="${""}" class="${"avatar-xxs"}"> fair
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fct, 0)} alt="${""}" class="${"avatar-xxs"}"> fct
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fil, 0)} alt="${""}" class="${"avatar-xxs"}"> fil
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fjc, 0)} alt="${""}" class="${"avatar-xxs"}"> fjc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fldc, 0)} alt="${""}" class="${"avatar-xxs"}"> fldc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", flo, 0)} alt="${""}" class="${"avatar-xxs"}"> flo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", flux, 0)} alt="${""}" class="${"avatar-xxs"}"> flux
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fsn, 0)} alt="${""}" class="${"avatar-xxs"}"> fsn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ftc, 0)} alt="${""}" class="${"avatar-xxs"}"> ftc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fuel, 0)} alt="${""}" class="${"avatar-xxs"}"> fuel
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", fun, 0)} alt="${""}" class="${"avatar-xxs"}"> fun
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", game, 0)} alt="${""}" class="${"avatar-xxs"}"> game
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gas, 0)} alt="${""}" class="${"avatar-xxs"}"> gas
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gbp, 0)} alt="${""}" class="${"avatar-xxs"}"> gbp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gbx, 0)} alt="${""}" class="${"avatar-xxs"}"> gbx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gbyte, 0)} alt="${""}" class="${"avatar-xxs"}"> gbyte
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", generic, 0)} alt="${""}" class="${"avatar-xxs"}"> generic
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gin, 0)} alt="${""}" class="${"avatar-xxs"}"> gin
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", glxt, 0)} alt="${""}" class="${"avatar-xxs"}"> glxt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gmr, 0)} alt="${""}" class="${"avatar-xxs"}"> gmr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gno, 0)} alt="${""}" class="${"avatar-xxs"}"> gno
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gnt, 0)} alt="${""}" class="${"avatar-xxs"}"> gnt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gold, 0)} alt="${""}" class="${"avatar-xxs"}"> gold
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", grc, 0)} alt="${""}" class="${"avatar-xxs"}"> grc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", grin, 0)} alt="${""}" class="${"avatar-xxs"}"> grin
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", grs, 0)} alt="${""}" class="${"avatar-xxs"}"> grs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", grt, 0)} alt="${""}" class="${"avatar-xxs"}"> grt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gsc, 0)} alt="${""}" class="${"avatar-xxs"}"> gsc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gto, 0)} alt="${""}" class="${"avatar-xxs"}"> gto
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gup, 0)} alt="${""}" class="${"avatar-xxs"}"> gup
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gusd, 0)} alt="${""}" class="${"avatar-xxs"}"> gusd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gvt, 0)} alt="${""}" class="${"avatar-xxs"}"> gvt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gxs, 0)} alt="${""}" class="${"avatar-xxs"}"> gxs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", gzr, 0)} alt="${""}" class="${"avatar-xxs"}"> gzr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hight, 0)} alt="${""}" class="${"avatar-xxs"}"> hight
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hns, 0)} alt="${""}" class="${"avatar-xxs"}"> hns
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hodl, 0)} alt="${""}" class="${"avatar-xxs"}"> hodl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hot, 0)} alt="${""}" class="${"avatar-xxs"}"> hot
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hpb, 0)} alt="${""}" class="${"avatar-xxs"}"> hpb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hsr, 0)} alt="${""}" class="${"avatar-xxs"}"> hsr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ht, 0)} alt="${""}" class="${"avatar-xxs"}"> ht
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", html, 0)} alt="${""}" class="${"avatar-xxs"}"> html
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", huc, 0)} alt="${""}" class="${"avatar-xxs"}"> huc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", husd, 0)} alt="${""}" class="${"avatar-xxs"}"> husd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", hush, 0)} alt="${""}" class="${"avatar-xxs"}"> hush
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", icn, 0)} alt="${""}" class="${"avatar-xxs"}"> icn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", icp, 0)} alt="${""}" class="${"avatar-xxs"}"> icp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", icx, 0)} alt="${""}" class="${"avatar-xxs"}"> icx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ignis, 0)} alt="${""}" class="${"avatar-xxs"}"> ignis
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ilk, 0)} alt="${""}" class="${"avatar-xxs"}"> ilk
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ink, 0)} alt="${""}" class="${"avatar-xxs"}"> ink
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ins, 0)} alt="${""}" class="${"avatar-xxs"}"> ins
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ion, 0)} alt="${""}" class="${"avatar-xxs"}"> ion
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", iop, 0)} alt="${""}" class="${"avatar-xxs"}"> iop
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", iop, 0)} alt="${""}" class="${"avatar-xxs"}"> iop
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", iost, 0)} alt="${""}" class="${"avatar-xxs"}"> iost
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", iotx, 0)} alt="${""}" class="${"avatar-xxs"}"> iotx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", iq, 0)} alt="${""}" class="${"avatar-xxs"}"> iq
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", itc, 0)} alt="${""}" class="${"avatar-xxs"}"> itc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", jnt, 0)} alt="${""}" class="${"avatar-xxs"}"> jnt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", jpy, 0)} alt="${""}" class="${"avatar-xxs"}"> jpy
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", kcs, 0)} alt="${""}" class="${"avatar-xxs"}"> kcs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", kin, 0)} alt="${""}" class="${"avatar-xxs"}"> kin
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", klown, 0)} alt="${""}" class="${"avatar-xxs"}"> klown
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", kmd, 0)} alt="${""}" class="${"avatar-xxs"}"> kmd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", knc, 0)} alt="${""}" class="${"avatar-xxs"}"> knc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", krb, 0)} alt="${""}" class="${"avatar-xxs"}"> krb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ksm, 0)} alt="${""}" class="${"avatar-xxs"}"> ksm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lbc, 0)} alt="${""}" class="${"avatar-xxs"}"> lbc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lend, 0)} alt="${""}" class="${"avatar-xxs"}"> lend
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", leo, 0)} alt="${""}" class="${"avatar-xxs"}"> leo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", link, 0)} alt="${""}" class="${"avatar-xxs"}"> link
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lkk, 0)} alt="${""}" class="${"avatar-xxs"}"> lkk
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", loom, 0)} alt="${""}" class="${"avatar-xxs"}"> loom
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lpt, 0)} alt="${""}" class="${"avatar-xxs"}"> lpt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lrc, 0)} alt="${""}" class="${"avatar-xxs"}"> lrc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lsk, 0)} alt="${""}" class="${"avatar-xxs"}"> lsk
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ltc, 0)} alt="${""}" class="${"avatar-xxs"}"> ltc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", lun, 0)} alt="${""}" class="${"avatar-xxs"}"> lun
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", maid, 0)} alt="${""}" class="${"avatar-xxs"}"> maid
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mana, 0)} alt="${""}" class="${"avatar-xxs"}"> mana
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", matic, 0)} alt="${""}" class="${"avatar-xxs"}"> matic
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", max, 0)} alt="${""}" class="${"avatar-xxs"}"> max
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mcap, 0)} alt="${""}" class="${"avatar-xxs"}"> mcap
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mco, 0)} alt="${""}" class="${"avatar-xxs"}"> mco
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mda, 0)} alt="${""}" class="${"avatar-xxs"}"> mda
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mds, 0)} alt="${""}" class="${"avatar-xxs"}"> mds
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", med, 0)} alt="${""}" class="${"avatar-xxs"}"> med
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", meetone, 0)} alt="${""}" class="${"avatar-xxs"}"> meetone
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mft, 0)} alt="${""}" class="${"avatar-xxs"}"> mft
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", miota, 0)} alt="${""}" class="${"avatar-xxs"}"> miota
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mith, 0)} alt="${""}" class="${"avatar-xxs"}"> mith
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mkr, 0)} alt="${""}" class="${"avatar-xxs"}"> mkr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mln, 0)} alt="${""}" class="${"avatar-xxs"}"> mln
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mnx, 0)} alt="${""}" class="${"avatar-xxs"}"> mnx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mnz, 0)} alt="${""}" class="${"avatar-xxs"}"> mnz
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", moac, 0)} alt="${""}" class="${"avatar-xxs"}"> moac
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mod, 0)} alt="${""}" class="${"avatar-xxs"}"> mod
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mona, 0)} alt="${""}" class="${"avatar-xxs"}"> mona
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", msr, 0)} alt="${""}" class="${"avatar-xxs"}"> msr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mth, 0)} alt="${""}" class="${"avatar-xxs"}"> mth
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mtl, 0)} alt="${""}" class="${"avatar-xxs"}"> mtl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", music, 0)} alt="${""}" class="${"avatar-xxs"}"> music
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", mzc, 0)} alt="${""}" class="${"avatar-xxs"}"> mzc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nano, 0)} alt="${""}" class="${"avatar-xxs"}"> nano
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nas, 0)} alt="${""}" class="${"avatar-xxs"}"> nas
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nav, 0)} alt="${""}" class="${"avatar-xxs"}"> nav
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ncash, 0)} alt="${""}" class="${"avatar-xxs"}"> ncash
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ndz, 0)} alt="${""}" class="${"avatar-xxs"}"> ndz
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nebl, 0)} alt="${""}" class="${"avatar-xxs"}"> nebl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", neo, 0)} alt="${""}" class="${"avatar-xxs"}"> neo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", neos, 0)} alt="${""}" class="${"avatar-xxs"}"> neos
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", neu, 0)} alt="${""}" class="${"avatar-xxs"}"> neu
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nexo, 0)} alt="${""}" class="${"avatar-xxs"}"> nexo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ngc, 0)} alt="${""}" class="${"avatar-xxs"}"> ngc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nio, 0)} alt="${""}" class="${"avatar-xxs"}"> nio
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nkn, 0)} alt="${""}" class="${"avatar-xxs"}"> nkn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nlc2, 0)} alt="${""}" class="${"avatar-xxs"}"> nlc2
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nlg, 0)} alt="${""}" class="${"avatar-xxs"}"> nlg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nmc, 0)} alt="${""}" class="${"avatar-xxs"}"> nmc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nmr, 0)} alt="${""}" class="${"avatar-xxs"}"> nmr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", npxs, 0)} alt="${""}" class="${"avatar-xxs"}"> npxs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ntbc, 0)} alt="${""}" class="${"avatar-xxs"}"> ntbc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nuls, 0)} alt="${""}" class="${"avatar-xxs"}"> nuls
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nxs, 0)} alt="${""}" class="${"avatar-xxs"}"> nxs
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", nxt, 0)} alt="${""}" class="${"avatar-xxs"}"> nxt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", oax, 0)} alt="${""}" class="${"avatar-xxs"}"> oax
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ok, 0)} alt="${""}" class="${"avatar-xxs"}"> ok
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", omg, 0)} alt="${""}" class="${"avatar-xxs"}"> omg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", omni, 0)} alt="${""}" class="${"avatar-xxs"}"> omni
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", one, 0)} alt="${""}" class="${"avatar-xxs"}"> one
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ong, 0)} alt="${""}" class="${"avatar-xxs"}"> ong
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ont, 0)} alt="${""}" class="${"avatar-xxs"}"> ont
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", oot, 0)} alt="${""}" class="${"avatar-xxs"}"> oot
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ost, 0)} alt="${""}" class="${"avatar-xxs"}"> ost
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ox, 0)} alt="${""}" class="${"avatar-xxs"}"> ox
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", oxt, 0)} alt="${""}" class="${"avatar-xxs"}"> oxt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", part, 0)} alt="${""}" class="${"avatar-xxs"}"> part
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pasc, 0)} alt="${""}" class="${"avatar-xxs"}"> pasc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pasl, 0)} alt="${""}" class="${"avatar-xxs"}"> pasl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pax, 0)} alt="${""}" class="${"avatar-xxs"}"> pax
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", paxg, 0)} alt="${""}" class="${"avatar-xxs"}"> paxg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pay, 0)} alt="${""}" class="${"avatar-xxs"}"> pay
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", payx, 0)} alt="${""}" class="${"avatar-xxs"}"> payx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pink, 0)} alt="${""}" class="${"avatar-xxs"}"> pink
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pirl, 0)} alt="${""}" class="${"avatar-xxs"}"> pirl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pivx, 0)} alt="${""}" class="${"avatar-xxs"}"> pivx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", plr, 0)} alt="${""}" class="${"avatar-xxs"}"> plr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", poa, 0)} alt="${""}" class="${"avatar-xxs"}"> poa
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", poe, 0)} alt="${""}" class="${"avatar-xxs"}"> poe
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", polis, 0)} alt="${""}" class="${"avatar-xxs"}"> polis
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", poly, 0)} alt="${""}" class="${"avatar-xxs"}"> poly
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pot, 0)} alt="${""}" class="${"avatar-xxs"}"> pot
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", powr, 0)} alt="${""}" class="${"avatar-xxs"}"> powr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ppc, 0)} alt="${""}" class="${"avatar-xxs"}"> ppc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ppp, 0)} alt="${""}" class="${"avatar-xxs"}"> ppp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ppt, 0)} alt="${""}" class="${"avatar-xxs"}"> ppt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pre, 0)} alt="${""}" class="${"avatar-xxs"}"> pre
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", prl, 0)} alt="${""}" class="${"avatar-xxs"}"> prl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pungo, 0)} alt="${""}" class="${"avatar-xxs"}"> pungo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", pura, 0)} alt="${""}" class="${"avatar-xxs"}"> pura
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", qash, 0)} alt="${""}" class="${"avatar-xxs"}"> qash
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", qiwi, 0)} alt="${""}" class="${"avatar-xxs"}"> qiwi
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", qlc, 0)} alt="${""}" class="${"avatar-xxs"}"> qlc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", qrl, 0)} alt="${""}" class="${"avatar-xxs"}"> qrl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", qsp, 0)} alt="${""}" class="${"avatar-xxs"}"> qsp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", qtum, 0)} alt="${""}" class="${"avatar-xxs"}"> qtum
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", r, 0)} alt="${""}" class="${"avatar-xxs"}"> r
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rads, 0)} alt="${""}" class="${"avatar-xxs"}"> rads
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rap, 0)} alt="${""}" class="${"avatar-xxs"}"> rap
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rcn, 0)} alt="${""}" class="${"avatar-xxs"}"> rcn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rdd, 0)} alt="${""}" class="${"avatar-xxs"}"> rdd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rdn, 0)} alt="${""}" class="${"avatar-xxs"}"> rdn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ren, 0)} alt="${""}" class="${"avatar-xxs"}"> ren
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rep, 0)} alt="${""}" class="${"avatar-xxs"}"> rep
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", repv2, 0)} alt="${""}" class="${"avatar-xxs"}"> repv2
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", req, 0)} alt="${""}" class="${"avatar-xxs"}"> req
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rhoc, 0)} alt="${""}" class="${"avatar-xxs"}"> rhoc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ric, 0)} alt="${""}" class="${"avatar-xxs"}"> ric
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rise, 0)} alt="${""}" class="${"avatar-xxs"}"> rise
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rlc, 0)} alt="${""}" class="${"avatar-xxs"}"> rlc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rpx, 0)} alt="${""}" class="${"avatar-xxs"}"> rpx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rub, 0)} alt="${""}" class="${"avatar-xxs"}"> rub
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", rvn, 0)} alt="${""}" class="${"avatar-xxs"}"> rvn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ryo, 0)} alt="${""}" class="${"avatar-xxs"}"> ryo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", safe, 0)} alt="${""}" class="${"avatar-xxs"}"> safe
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", safemoon, 0)} alt="${""}" class="${"avatar-xxs"}"> safemoon
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sai, 0)} alt="${""}" class="${"avatar-xxs"}"> sai
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", salt, 0)} alt="${""}" class="${"avatar-xxs"}"> salt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", san, 0)} alt="${""}" class="${"avatar-xxs"}"> san
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sand, 0)} alt="${""}" class="${"avatar-xxs"}"> sand
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sbd, 0)} alt="${""}" class="${"avatar-xxs"}"> sbd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sberbank, 0)} alt="${""}" class="${"avatar-xxs"}"> sberbank
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sc, 0)} alt="${""}" class="${"avatar-xxs"}"> sc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", shift, 0)} alt="${""}" class="${"avatar-xxs"}"> shift
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sib, 0)} alt="${""}" class="${"avatar-xxs"}"> sib
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sin, 0)} alt="${""}" class="${"avatar-xxs"}"> sin
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", skl, 0)} alt="${""}" class="${"avatar-xxs"}"> skl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sky, 0)} alt="${""}" class="${"avatar-xxs"}"> sky
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", slr, 0)} alt="${""}" class="${"avatar-xxs"}"> slr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sls, 0)} alt="${""}" class="${"avatar-xxs"}"> sls
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", smart, 0)} alt="${""}" class="${"avatar-xxs"}"> smart
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sngls, 0)} alt="${""}" class="${"avatar-xxs"}"> sngls
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", snm, 0)} alt="${""}" class="${"avatar-xxs"}"> snm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", snt, 0)} alt="${""}" class="${"avatar-xxs"}"> snt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", snx, 0)} alt="${""}" class="${"avatar-xxs"}"> snx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", soc, 0)} alt="${""}" class="${"avatar-xxs"}"> soc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sol, 0)} alt="${""}" class="${"avatar-xxs"}"> sol
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", spacehbit, 0)} alt="${""}" class="${"avatar-xxs"}"> spacehbit
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", spank, 0)} alt="${""}" class="${"avatar-xxs"}"> spank
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sphtx, 0)} alt="${""}" class="${"avatar-xxs"}"> sphtx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", srn, 0)} alt="${""}" class="${"avatar-xxs"}"> srn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", stak, 0)} alt="${""}" class="${"avatar-xxs"}"> stak
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", start, 0)} alt="${""}" class="${"avatar-xxs"}"> start
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", steem, 0)} alt="${""}" class="${"avatar-xxs"}"> steem
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", storj, 0)} alt="${""}" class="${"avatar-xxs"}"> storj
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", storm, 0)} alt="${""}" class="${"avatar-xxs"}"> storm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", stox, 0)} alt="${""}" class="${"avatar-xxs"}"> stox
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", stq, 0)} alt="${""}" class="${"avatar-xxs"}"> stq
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", strat, 0)} alt="${""}" class="${"avatar-xxs"}"> strat
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", stx, 0)} alt="${""}" class="${"avatar-xxs"}"> stx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sub, 0)} alt="${""}" class="${"avatar-xxs"}"> sub
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sumo, 0)} alt="${""}" class="${"avatar-xxs"}"> sumo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sushi, 0)} alt="${""}" class="${"avatar-xxs"}"> sushi
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", sys, 0)} alt="${""}" class="${"avatar-xxs"}"> sys
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", taas, 0)} alt="${""}" class="${"avatar-xxs"}"> taas
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tau, 0)} alt="${""}" class="${"avatar-xxs"}"> tau
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tbx, 0)} alt="${""}" class="${"avatar-xxs"}"> tbx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tel, 0)} alt="${""}" class="${"avatar-xxs"}"> tel
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ten, 0)} alt="${""}" class="${"avatar-xxs"}"> ten
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tern, 0)} alt="${""}" class="${"avatar-xxs"}"> tern
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tgch, 0)} alt="${""}" class="${"avatar-xxs"}"> tgch
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", theta, 0)} alt="${""}" class="${"avatar-xxs"}"> theta
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tix, 0)} alt="${""}" class="${"avatar-xxs"}"> tix
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tkn, 0)} alt="${""}" class="${"avatar-xxs"}"> tkn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tks, 0)} alt="${""}" class="${"avatar-xxs"}"> tks
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tnb, 0)} alt="${""}" class="${"avatar-xxs"}"> tnb
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tnc, 0)} alt="${""}" class="${"avatar-xxs"}"> tnc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tnt, 0)} alt="${""}" class="${"avatar-xxs"}"> tnt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tomo, 0)} alt="${""}" class="${"avatar-xxs"}"> tomo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tpay, 0)} alt="${""}" class="${"avatar-xxs"}"> tpay
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", trig, 0)} alt="${""}" class="${"avatar-xxs"}"> trig
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", trtl, 0)} alt="${""}" class="${"avatar-xxs"}"> trtl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", trx, 0)} alt="${""}" class="${"avatar-xxs"}"> trx
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tusd, 0)} alt="${""}" class="${"avatar-xxs"}"> tusd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", tzc, 0)} alt="${""}" class="${"avatar-xxs"}"> tzc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", ubq, 0)} alt="${""}" class="${"avatar-xxs"}"> ubq
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", uma, 0)} alt="${""}" class="${"avatar-xxs"}"> uma
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", uni, 0)} alt="${""}" class="${"avatar-xxs"}"> uni
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", unity, 0)} alt="${""}" class="${"avatar-xxs"}"> unity
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", usd, 0)} alt="${""}" class="${"avatar-xxs"}"> usd
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", usdc, 0)} alt="${""}" class="${"avatar-xxs"}"> usdc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", usdt, 0)} alt="${""}" class="${"avatar-xxs"}"> usdt
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", utk, 0)} alt="${""}" class="${"avatar-xxs"}"> utk
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", veri, 0)} alt="${""}" class="${"avatar-xxs"}"> veri
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vet, 0)} alt="${""}" class="${"avatar-xxs"}"> vet
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", via, 0)} alt="${""}" class="${"avatar-xxs"}"> via
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vib, 0)} alt="${""}" class="${"avatar-xxs"}"> vib
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vibe, 0)} alt="${""}" class="${"avatar-xxs"}"> vibe
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vivo, 0)} alt="${""}" class="${"avatar-xxs"}"> vivo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vrc, 0)} alt="${""}" class="${"avatar-xxs"}"> vrc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vrsc, 0)} alt="${""}" class="${"avatar-xxs"}"> vrsc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vtc, 0)} alt="${""}" class="${"avatar-xxs"}"> vtc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", vtho, 0)} alt="${""}" class="${"avatar-xxs"}"> vtho
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wabi, 0)} alt="${""}" class="${"avatar-xxs"}"> wabi
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wan, 0)} alt="${""}" class="${"avatar-xxs"}"> wan
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", waves, 0)} alt="${""}" class="${"avatar-xxs"}"> waves
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wax, 0)} alt="${""}" class="${"avatar-xxs"}"> wax
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wbtc, 0)} alt="${""}" class="${"avatar-xxs"}"> wbtc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wgr, 0)} alt="${""}" class="${"avatar-xxs"}"> wgr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wicc, 0)} alt="${""}" class="${"avatar-xxs"}"> wicc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wings, 0)} alt="${""}" class="${"avatar-xxs"}"> wings
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wpr, 0)} alt="${""}" class="${"avatar-xxs"}"> wpr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", wtc, 0)} alt="${""}" class="${"avatar-xxs"}"> wtc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", x, 0)} alt="${""}" class="${"avatar-xxs"}"> x
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xas, 0)} alt="${""}" class="${"avatar-xxs"}"> xas
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xbc, 0)} alt="${""}" class="${"avatar-xxs"}"> xbc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xbp, 0)} alt="${""}" class="${"avatar-xxs"}"> xbp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xby, 0)} alt="${""}" class="${"avatar-xxs"}"> xby
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xcp, 0)} alt="${""}" class="${"avatar-xxs"}"> xcp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xdn, 0)} alt="${""}" class="${"avatar-xxs"}"> xdn
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xem, 0)} alt="${""}" class="${"avatar-xxs"}"> xem
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xin, 0)} alt="${""}" class="${"avatar-xxs"}"> xin
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xlm, 0)} alt="${""}" class="${"avatar-xxs"}"> xlm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xmcc, 0)} alt="${""}" class="${"avatar-xxs"}"> xmcc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xmg, 0)} alt="${""}" class="${"avatar-xxs"}"> xmg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xmo, 0)} alt="${""}" class="${"avatar-xxs"}"> xmo
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xmr, 0)} alt="${""}" class="${"avatar-xxs"}"> xmr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xmy, 0)} alt="${""}" class="${"avatar-xxs"}"> xmy
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xp, 0)} alt="${""}" class="${"avatar-xxs"}"> xp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xpa, 0)} alt="${""}" class="${"avatar-xxs"}"> xpa
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xpm, 0)} alt="${""}" class="${"avatar-xxs"}"> xpm
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xpr, 0)} alt="${""}" class="${"avatar-xxs"}"> xpr
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xrp, 0)} alt="${""}" class="${"avatar-xxs"}"> xrp
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xsg, 0)} alt="${""}" class="${"avatar-xxs"}"> xsg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xtz, 0)} alt="${""}" class="${"avatar-xxs"}"> xtz
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xuc, 0)} alt="${""}" class="${"avatar-xxs"}"> xuc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xvc, 0)} alt="${""}" class="${"avatar-xxs"}"> xvc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xvg, 0)} alt="${""}" class="${"avatar-xxs"}"> xvg
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", xzc, 0)} alt="${""}" class="${"avatar-xxs"}"> xzc
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", yfi, 0)} alt="${""}" class="${"avatar-xxs"}"> yfi
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", yoyow, 0)} alt="${""}" class="${"avatar-xxs"}"> yoyow
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zcl, 0)} alt="${""}" class="${"avatar-xxs"}"> zcl
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zec, 0)} alt="${""}" class="${"avatar-xxs"}"> zec
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zel, 0)} alt="${""}" class="${"avatar-xxs"}"> zel
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zen, 0)} alt="${""}" class="${"avatar-xxs"}"> zen
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zest, 0)} alt="${""}" class="${"avatar-xxs"}"> zest
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zil, 0)} alt="${""}" class="${"avatar-xxs"}"> zil
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zilla, 0)} alt="${""}" class="${"avatar-xxs"}"> zilla
                                </div>`;
                            }
                          })}
                            ${validate_component(Col, "Col").$$render($$result, { xl: 3, lg: 4, sm: 6 }, {}, {
                            default: () => {
                              return `<div class="${"text-muted hstack gap-2"}"><img${add_attribute("src", zrx, 0)} alt="${""}" class="${"avatar-xxs"}"> zrx
                                </div>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Cryptoicons as default };

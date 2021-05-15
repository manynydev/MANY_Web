import React, {useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    Glyph,
    TextBaseManySans,
    Logo,
    Location,
    ManyHomeButton, RightBlackButton, SnapItemContainer
} from "../components";
import {
    SnapItem, SnapList, useDragToScroll, useScroll,
} from 'react-snaplist-carousel';

const mainUsers = [
    {
        z: 0,
        month: 24,
        id: 0,
        location: require("../assets/continents/0049_con.png").default,
        glyph: require("../assets/glyphs/0050_B.png").default,
        logo: require("../assets/logos/0049_AMAM_BW.png").default,
        logo1: require("../assets/logos/0049_TUNUR_BW.png").default
    },
    {
        z: 1,
        month: 36,
        id: 6,
        location: require("../assets/continents/0022_con.png").default,
        glyph: require("../assets/glyphs/0022_B.png").default,
        logo: require("../assets/logos/0022_ECFMG_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 1,
        location: require("../assets/continents/0039_con.png").default,
        glyph: require("../assets/glyphs/0039_B.png").default,
        logo: require("../assets/logos/0039_AGIN_BW.png").default,
        logo1: require("../assets/logos/0039_ARC_BW.png").default,
        logo2: require("../assets/logos/0039_UKZ_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 2,
        location: require("../assets/continents/0040_con.png").default,
        glyph: require("../assets/glyphs/0040_B.png").default,
        logo: require("../assets/logos/0040_SWU_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 3,
        location: require("../assets/continents/0041_con.png").default,
        glyph: require("../assets/glyphs/0041_B.png").default,
        logo: require("../assets/logos/0041_UGuadalajara_BW.png").default
    },
    {
        z: 0,
        month: 24,
        id: 4,
        location: require("../assets/continents/0045_con.png").default,
        glyph: require("../assets/glyphs/0045_B.png").default,
        logo: require("../assets/logos/0045_NIEED_BW.png").default
    },
    {
        z: 1,
        month: 12,
        id: 5,
        location: require("../assets/continents/0046_con.png").default,
        glyph: require("../assets/glyphs/0046_A.png").default,
        logo: require("../assets/logos/0046_UDESC_BW.png").default,
        logo1: require("../assets/logos/0046_usp_bw.png").default
    },
    {
        z: 0,
        month: 24,
        id: 7,
        location: require("../assets/continents/0061_con.png").default,
        glyph: require("../assets/glyphs/0061_B.png").default,
        logo: require("../assets/logos/0061_IL_BW.png").default
    },
    {
        z: 0,
        month: 24,
        id: 8,
        location: require("../assets/continents/0067_con.png").default,
        glyph: require("../assets/glyphs/0067_B.png").default,
        logo: require("../assets/logos/0067_AEA_BW.png").default,
        logo1: require("../assets/logos/0067_AEA_BW.png").default
    },
    // {
    //     height: 100,
    //     move: 130,
    //     z: 0,
    //     month: 36,
    //     id: 9,
    //     location: require("../assets/continents/0071_con.png").default,
    //     glyph: require("../assets/glyphs/0071_C.png").default,
    //     logo: require("../assets/logos/0071_ISAB_BW.png").default
    // },
    {
        z: 0,
        month: 12,
        id: 10,
        location: require("../assets/continents/0073_con.png").default,
        glyph: require("../assets/glyphs/0073_B.png").default,
        logo: require("../assets/logos/0073_GBM_BW.png").default,
        logo1: require("../assets/logos/0073_TFC_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 11,
        location: require("../assets/continents/0074_con.png").default,
        glyph: require("../assets/glyphs/0074_B.png").default,
        logo: require("../assets/logos/0074_TFC_BW.png").default
    },
    {
        move: 90,
        z: 0,
        month: 24,
        id: 12,
        location: require("../assets/continents/0075_con.png").default,
        glyph: require("../assets/glyphs/0075_C.png").default,
        logo: require("../assets/logos/0075_WFC_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 13,
        location: require("../assets/continents/0077_con.png").default,
        glyph: require("../assets/glyphs/0077_B.png").default,
        logo: require("../assets/logos/0077_Jerash_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 14,
        location: require("../assets/continents/0078_con.png").default,
        glyph: require("../assets/glyphs/0078_B.png").default,
        logo: require("../assets/logos/0078_FAO_BW.png").default
    },
    {
        z: 1,
        month: 36,
        id: 15,
        location: require("../assets/continents/0079_con.png").default,
        glyph: require("../assets/glyphs/0079_A.png").default,
        logo: require("../assets/logos/0079_DamascusU_BW.png").default
    },
    {
        z: 1,
        month: 24,
        id: 16,
        location: require("../assets/continents/0080_con.png").default,
        glyph: require("../assets/glyphs/0080_A.png").default,
        logo: require("../assets/logos/0080_ECA_BW.png").default
    },
    {
        z: 0,
        month: 24,
        id: 17,
        location: require("../assets/continents/0081_con.png").default,
        glyph: require("../assets/glyphs/0081_B.png").default,
        logo: require("../assets/logos/0081_WWBG_BW.png").default
    },
    {
        z: 1,
        month: 18,
        id: 18,
        location: require("../assets/continents/0085_con.png").default,
        glyph: require("../assets/glyphs/0085_A.png").default,
        logo: require("../assets/logos/0085_BHRRC_BW.png").default,
        logo1: require("../assets/logos/0085_JCCA_BW.png").default
    },
    {
        z: 0,
        month: 18,
        id: 19,
        location: require("../assets/continents/0086_con.png").default,
        glyph: require("../assets/glyphs/0086_B.png").default,
        logo: require("../assets/logos/0086_BIRZEIT_BW.png").default,
        logo1: require("../assets/logos/0086_IYF_BW.png").default
    },
    {
        z: 0,
        month: 6,
        id: 20,
        location: require("../assets/continents/0088_con.png").default,
        glyph: require("../assets/glyphs/0088_B.png").default,
        logo: require("../assets/logos/0088_ESL_BW.png").default,
        logo1: require("../assets/logos/0088_icee_BW.png").default
    },
    {
        z: 1,
        month: 6,
        id: 21,
        location: require("../assets/continents/0089_con.png").default,
        glyph: require("../assets/glyphs/0089_A.png").default,
        logo: require("../assets/logos/0089_DOCTORSACADEMY_BW.png").default
    },
    {
        z: 1,
        month: 6,
        id: 22,
        location: require("../assets/continents/0091_con.png").default,
        glyph: require("../assets/glyphs/0091_A.png").default,
        logo: require("../assets/logos/0091_CS_BW.png").default,
        logo1: require("../assets/logos/0091_LMA_BW.png").default
    },
];

const allMatches = {
 u6 : [
    {id:0,month:36,location:require("../assets/continents/0021_con.png").default, glyph: require("../assets/glyphs/0021_B.png").default,logo:require("../assets/logos/0021_Alexandria_BW.png").default,logo1:require("../assets/logos/0021_ECFMG_BW.png").default},
    {id:1,month:36,location:require("../assets/continents/0023_con.png").default, glyph: require("../assets/glyphs/0023_B.png").default,logo:require("../assets/logos/0023_Beaumont_BW.png").default,logo1:require("../assets/logos/0023_ECFMG_BW.png").default},
    {id:2,month:6,location:require("../assets/continents/0055_con.png").default, glyph: require("../assets/glyphs/0055_B.png").default,logo:require("../assets/logos/0055_CSU_BW.png").default,logo1:require("../assets/logos/0055_SAS_BW.png").default},
],
 u1 : [
    {id:0,month:12,location:require("../assets/continents/0014_con.png").default, glyph: require("../assets/glyphs/0014_A.png").default,logo:require("../assets/logos/0014_WWFE_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0016_con.png").default, glyph: require("../assets/glyphs/0016_A.png").default,logo:require("../assets/logos/0016_WWFE_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0037_con.png").default, glyph: require("../assets/glyphs/0037_A.png").default,logo:require("../assets/logos/0037_ILRI_BW.png").default},
    {id:3,month:36,location:require("../assets/continents/0047_con.png").default, glyph: require("../assets/glyphs/0047_B.png").default,logo:require("../assets/logos/0047_DAAD_BW.png").default,logo1:require("../assets/logos/0047_ESGPIP_BW.png").default},
    {id:4,month:36,location:require("../assets/continents/0095_con.png").default, glyph: require("../assets/glyphs/0095_A.png").default,logo:require("../assets/logos/0095_CFRURALA_BW.png").default},
],
 u2 : [
    {id:0,month:12,location:require("../assets/continents/0015_con.png").default, glyph: require("../assets/glyphs/0015_A.png").default,logo:require("../assets/logos/0015_WWFE_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0017_con.png").default, glyph: require("../assets/glyphs/0017_A.png").default,logo:require("../assets/logos/0017_DRYCREEK_BW.png").default,logo1:require("../assets/logos/0017_WWFE_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0018_con.png").default, glyph: require("../assets/glyphs/0018_A.png").default,logo:require("../assets/logos/0018_WWFE_BW.png").default},
    {id:3,month:12,location:require("../assets/continents/0019_con.png").default, glyph: require("../assets/glyphs/0019_A.png").default,logo:require("../assets/logos/0019_WWFE_BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0020_con.png").default, glyph: require("../assets/glyphs/0020_A.png").default,logo:require("../assets/logos/0020_WWFE_BW.png").default},
    // {id:5,month:6,location:require("../Locations/Australia.png").default, glyph: require("../assets/glyphs/0038_A.png").default,logo:require("../assets/logos/0038_AUS_BW.png").default,logo1:require("../assets/logos/0038_NHL_.png").default},
    {id:6,month:6,location:require("../assets/continents/0063_con.png").default, glyph: require("../assets/glyphs/0063_A.png").default,logo:require("../assets/logos/0063_Sastak_BW.png").default},
    {id:7,month:24,location:require("../assets/continents/0024_con.png").default, glyph: require("../assets/glyphs/0024_B.png").default,logo:require("../assets/logos/0024_Detroit__BW.png").default,logo1:require("../assets/logos/0024_DGE_BW.png").default},
    // {id:8,month:6,location:require("../assets/continents/0063_con.png").default, glyph: require("../assets/glyphs/0063_A.png").default,logo:require("../assets/logos/0063_Sastak_BW.png").default},
    {id:9,month:24,location:require("../assets/continents/0072_con.png").default, glyph: require("../assets/glyphs/0072_A.png").default,logo:require("../assets/logos/0072_WPC_BW.png").default},
    {id:10,month:12,location:require("../assets/continents/0092_con.png").default, glyph: require("../assets/glyphs/0092_A.png").default,logo:require("../assets/logos/0092_EARTNNET_BW.png").default,logo1:require("../assets/logos/0092_MESA_BW.png").default},
],
 u3 : [
    {id:0,month:12,location:require("../assets/continents/0014_con.png").default, glyph: require("../assets/glyphs/0014_A.png").default,logo:require("../assets/logos/0014_WWFE_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0016_con.png").default, glyph: require("../assets/glyphs/0016_A.png").default,logo:require("../assets/logos/0016_WWFE_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0037_con.png").default, glyph: require("../assets/glyphs/0037_A.png").default,logo:require("../assets/logos/0037_ILRI_BW.png").default},
    {id:3,month:36,location:require("../assets/continents/0047_con.png").default, glyph: require("../assets/glyphs/0047_B.png").default,logo:require("../assets/logos/0047_ESGPIP_BW.png").default,logo1:require("../assets/logos/0047_DAAD_BW.png").default},
    {id:4,month:36,location:require("../assets/continents/0095_con.png").default, glyph: require("../assets/glyphs/0095_A.png").default,logo:require("../assets/logos/0095_CFRURALA_BW.png").default},
],
 u4 : [
    {id:0,month:36,location:require("../assets/continents/0044_con.png").default, glyph: require("../assets/glyphs/0044_A.png").default,logo:require("../assets/logos/0044_NIEED_BW.png").default},
],
 u5 : [
    {id:0,month:12,location:require("../assets/continents/0028_con.png").default, glyph: require("../assets/glyphs/0028_B.png").default,logo:require("../assets/logos/0028_USFS_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0029_con.png").default, glyph: require("../assets/glyphs/0029_B.png").default,logo:require("../assets/logos/0029_USFS_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0031_con.png").default, glyph: require("../assets/glyphs/0031_B.png").default,logo:require("../assets/logos/0031_USFS_BW.png").default},
    {id:3,month:4,location:require("../assets/continents/0064_con.png").default, glyph: require("../assets/glyphs/0064_B.png").default,logo:require("../assets/logos/0064_SEE_BW.png").default,logo1:require("../assets/logos/0064_Access_Tier5_BW.jpg")},
    {id:4,month:12,location:require("../assets/continents/0069_con.png").default, glyph: require("../assets/glyphs/0069_B.png").default,logo:require("../assets/logos/0069_BIODIVERSITY_BW.png").default,logo1:require("../assets/logos/0069_CGIAR_logo_BW.png").default},
    {id:5,month:12,location:require("../assets/continents/0070_con.png").default, glyph: require("../assets/glyphs/0070_B.png").default,logo:require("../assets/logos/0070_BIODIVERSITY_BW.png").default,logo1:require("../assets/logos/0070_CGIAR_logo_BW.png").default},
    {id:6,month:6,location:require("../assets/continents/0094_con.png").default, glyph: require("../assets/glyphs/0094_B.png").default,logo:require("../assets/logos/0094_AMERICORPS_BW.png").default,logo1:require("../assets/logos/0094_EARTHCORPS_BW.png").default},
],
 u0 : [
    {id:0,month:24,location:require("../assets/continents/0051_con.png").default, glyph: require("../assets/glyphs/0051_B.png").default,logo:require("../assets/logos/0051_ILO_BW.png").default,logo1:require("../assets/logos/0051_TUNUR_BW.png").default},
    {id:1,month:36,location:require("../assets/continents/0053_con.png").default, glyph: require("../assets/glyphs/0053_B.png").default,logo:require("../assets/logos/0053_DESERTEC_BW.png").default,logo1:require("../assets/logos/0053_IOM_BW.png").default},
],
 u7 : [
    {id:0,month:12,location:require("../assets/continents/0056_con.png").default, glyph: require("../assets/glyphs/0056_B.png").default,logo:require("../assets/logos/0056_AARP_BW.png").default,logo1:require("../assets/logos/0056_Encore_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0057_con.png").default, glyph: require("../assets/glyphs/0057_B.png").default,logo:require("../assets/logos/0057_AARP_BW.png").default,logo1:require("../assets/logos/0057_Encore_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0058_con.png").default, glyph: require("../assets/glyphs/0058_B.png").default,logo:require("../assets/logos/0058_AARP_BW.png").default,logo1:require("../assets/logos/0058_COTACACHI_BW.png").default},
    {id:3,month:300,location:require("../assets/continents/0059_con.png").default, glyph: require("../assets/glyphs/0059_B.png").default,logo:require("../assets/logos/0059_CIPEM_BW.png").default,logo1:require("../assets/logos/0059_EERealty_BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0060_con.png").default, glyph: require("../assets/glyphs/0060_A.png").default,logo:require("../assets/logos/0060_IESS_BW.png").default,logo1:require("../assets/logos/0060_IL_BW.png").default},
],
 u8 :[
    {id:0,month:24,location:require("../assets/continents/0066_con.png").default, glyph: require("../assets/glyphs/0066_A.png").default,logo:require("../assets/logos/0066_AEA_BW.png").default},
],
 u9 : [
    {id:0,move:-0,month:24,location:require("../assets/continents/0068_con.png").default, glyph: require("../assets/glyphs/0068_C.png").default,logo:require("../assets/logos/0068_CIP_BW.png").default},
    {id:1,move:-20,month:24,location:require("../assets/continents/0075_con.png").default, glyph: require("../assets/glyphs/0075_C.png").default,logo:require("../assets/logos/0075_WFC_BW.png").default},
    {id:2,month:24,location:require("../assets/continents/0087_con.png").default, glyph: require("../assets/glyphs/0087_C.png").default,logo:require("../assets/logos/0087_BW.png").default,logo1:require("../assets/logos/0087_CAP_BW.png").default},
    {id:3,month:24,location:require("../assets/continents/0076_con.png").default, glyph: require("../assets/glyphs/0076_C.png").default,logo:require("../assets/logos/0076_KFC_BW.png").default},
],
 u10 : [
    // {id:0,text:require("../Paragraphs/unnamed.png").default,month:12,location:require("../assets/continents/0002_con.png").default, glyph: require("../assets/glyphs/0002_A.png").default,logo:require("../assets/logos/0002_FCC_BW.png").default,logo1:require("../assets/logos/0002_STLOUIS_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0003_con.png").default, glyph: require("../assets/glyphs/0003_A.png").default,logo:require("../assets/logos/0003_FCC_BW.png").default,logo1:require("../assets/logos/0003_KANSASCITY_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0004_con.png").default, glyph: require("../assets/glyphs/0004_A.png").default,logo:require("../assets/logos/0004_FCC_BW.png").default,logo1:require("../assets/logos/0004_FLINT_BW.png").default},
    {id:3,month:14,location:require("../assets/continents/0005_con.png").default, glyph: require("../assets/glyphs/0005_A.png").default,logo:require("../assets/logos/0005_FCC_BW.png").default,logo1:require("../assets/logos/0005_UWT_BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0006_con.png").default, glyph: require("../assets/glyphs/0006_A.png").default,logo:require("../assets/logos/0006_ELKHART_BW.png").default,logo1:require("../assets/logos/0006_FCC_BW.png").default},
    {id:5,month:6,location:require("../assets/continents/0094_con.png").default, glyph: require("../assets/glyphs/0094_B.png").default,logo:require("../assets/logos/0094_EARTHCORPS_BW.png").default,logo1:require("../assets/logos/0094_AMERICORPS_BW.png").default},
],
 u11 :[
    {id:0,month:12,location:require("../assets/continents/0002_con.png").default, glyph: require("../assets/glyphs/0002_A.png").default,logo:require("../assets/logos/0002_FCC_BW.png").default,logo1:require("../assets/logos/0002_STLOUIS_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0003_con.png").default, glyph: require("../assets/glyphs/0003_A.png").default,logo:require("../assets/logos/0003_FCC_BW.png").default,logo1:require("../assets/logos/0003_KANSASCITY_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0004_con.png").default, glyph: require("../assets/glyphs/0004_A.png").default,logo:require("../assets/logos/0004_FCC_BW.png").default,logo1:require("../assets/logos/0004_FLINT_BW.png").default},
    {id:3,month:14,location:require("../assets/continents/0005_con.png").default, glyph: require("../assets/glyphs/0005_A.png").default,logo:require("../assets/logos/0005_FCC_BW.png").default,logo1:require("../assets/logos/0005_UWT_BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0006_con.png").default, glyph: require("../assets/glyphs/0006_A.png").default,logo:require("../assets/logos/0006_ELKHART_BW.png").default,logo1:require("../assets/logos/0006_FCC_BW.png").default},
    {id:5,month:6,location:require("../assets/continents/0094_con.png").default, glyph: require("../assets/glyphs/0094_B.png").default,logo:require("../assets/logos/0094_EARTHCORPS_BW.png").default,logo1:require("../assets/logos/0094_AMERICORPS_BW.png").default},
],
 u12 :[
    {id:0,move:30,month:24,location:require("../assets/continents/0076_con.png").default, glyph: require("../assets/glyphs/0076_C.png").default,logo:require("../assets/logos/0076_KFC_BW.png").default},
],
 u13 : [
    {id:0,month:12,location:require("../assets/continents/0007_con.png").default, glyph: require("../assets/glyphs/0007_B.png").default,logo:require("../assets/logos/0007_DELFINA_BW.png, .png").default,logo1:require("../assets/logos/0007_SILENTU_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0008_con.png").default, glyph: require("../assets/glyphs/0008_B.png").default,logo:require("../assets/logos/0008_Impulse theater_BW.png").default,logo1:require("../assets/logos/0008_ringlok_BW.png").default},
    {id:3,month:1,location:require("../assets/continents/0012_con.png").default, glyph: require("../assets/glyphs/0012_B.png").default,logo:require("../assets/logos/0012_CSC_BW.png").default,logo1:require("../assets/logos/0012_FNCSF_BW.png").default},
    {id:4,month:36,location:require("../assets/continents/0044_con.png").default, glyph: require("../assets/glyphs/0044_A.png").default,logo:require("../assets/logos/0044_NIEED_BW.png").default},
    {id:5,month:24,location:require("../assets/continents/0045_con.png").default, glyph: require("../assets/glyphs/0045_B.png").default,logo:require("../assets/logos/0045_NIEED_BW.png").default,logo1:require("../assets/logos/0064_Access_Tier5_BW.jpg")},
    {id:6,month:6,location:require("../assets/continents/0052_con.png").default, glyph: require("../assets/glyphs/0052_A.png").default,logo:require("../assets/logos/0052_BRAC_BW.png").default,logo1:require("../assets/logos/0052_ILO_BW.png").default},
    {id:7,month:6,location:require("../assets/continents/0054_con.png").default, glyph: require("../assets/glyphs/0054_A.png").default,logo:require("../assets/logos/0054_CSU_BW.png").default,logo1:require("../assets/logos/0054_SAS_BW.png").default},
    {id:8,month:6,location:require("../assets/continents/0055_con.png").default, glyph: require("../assets/glyphs/0055_B.png").default,logo:require("../assets/logos/0055_SAS_BW.png").default,logo1:require("../assets/logos/0055_CSU_BW.png").default},
    {id:9,month:48,location:require("../assets/continents/0082_con.png").default, glyph: require("../assets/glyphs/0082_B.png").default,logo:require("../assets/logos/0082_Dayton_BW.png").default,logo1:require("../assets/logos/0082_MCLB_BW.png").default},
],
 u14 :[
    {id:0,month:12,location:require("../assets/continents/0014_con.png").default, glyph: require("../assets/glyphs/0014_A.png").default,logo:require("../assets/logos/0014_WWFE_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0016_con.png").default, glyph: require("../assets/glyphs/0016_A.png").default,logo:require("../assets/logos/0016_WWFE_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0031_con.png").default, glyph: require("../assets/glyphs/0031_B.png").default,logo:require("../assets/logos/0031_USFS_BW.png").default},
    {id:3,month:36,location:require("../assets/continents/0047_con.png").default, glyph: require("../assets/glyphs/0047_B.png").default,logo:require("../assets/logos/0047_DAAD_BW.png").default,logo1:require("../assets/logos/0047_ESGPIP_BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0092_con.png").default, glyph: require("../assets/glyphs/0092_A.png").default,logo:require("../assets/logos/0092_MESA_BW.png").default,logo1:require("../assets/logos/0092_EARTNNET_BW.png").default},
    {id:5,month:12,location:require("../assets/continents/0093_con.png").default, glyph: require("../assets/glyphs/0093_A.png").default,logo:require("../assets/logos/0093_MESA_BW.png").default,logo1:require("../assets/logos/0093_OSEEDA_BW.png").default},
    {id:6,month:36,location:require("../assets/continents/0095_con.png").default, glyph: require("../assets/glyphs/0095_A.png").default,logo:require("../assets/logos/0095_CFRURALA_BW.png").default},
    {id:7,month:12,location:require("../assets/continents/0096_con.png").default, glyph: require("../assets/glyphs/0096_A.png").default,logo:require("../assets/logos/0096_ALASKAMCC_BW.png").default},
],
 u15 :[
    {id:0,month:12,location:require("../assets/continents/0007_con.png").default, glyph: require("../assets/glyphs/0007_B.png").default,logo:require("../assets/logos/0007_Sroom_BW.png").default,logo1:require("../assets/logos/0007_SILENTU_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0008_con.png").default, glyph: require("../assets/glyphs/0008_B.png").default,logo:require("../assets/logos/0008_Impulse theater_BW.png").default,logo1:require("../assets/logos/0008_ringlok_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0043_con.png").default, glyph: require("../assets/glyphs/0043_B.png").default,logo:require("../assets/logos/0043_NIEED_BW.png").default,logo1:require("../assets/logos/0043_TALK_BW.png").default},
    {id:3,month:6,location:require("../assets/continents/0054_con.png").default, glyph: require("../assets/glyphs/0054_A.png").default,logo:require("../assets/logos/0054_CSU_BW.png").default,logo1:require("../assets/logos/0054_SAS_BW.png").default},
    {id:4,month:48,location:require("../assets/continents/0082_con.png").default, glyph: require("../assets/glyphs/0082_B.png").default,logo:require("../assets/logos/0082_Dayton_BW.png").default,logo1:require("../assets/logos/0082_MCLB_BW.png").default},
],
 u16 :[
    {id:0,month:6,location:require("../assets/continents/0009_con.png").default, glyph: require("../assets/glyphs/0009_B.png").default,logo:require("../assets/logos/0009_bsm_BW.png").default,logo1:require("../assets/logos/0009_REfugio_bw.png").default},
    {id:1,month:1,location:require("../assets/continents/0013_con.png").default, glyph: require("../assets/glyphs/0013_B.png").default,logo:require("../assets/logos/0013_TU_BW.png").default,logo1:require("../assets/logos/0013_Uberdentellerand_BW.png").default},
    {id:2,month:18,location:require("../assets/continents/0024_con.png").default, glyph: require("../assets/glyphs/0024_B.png").default,logo:require("../assets/logos/0024_Detroit__BW.png").default,logo1:require("../assets/logos/0024_DGE_BW.png").default},
    {id:3,month:18,location:require("../assets/continents/0025_con.png").default, glyph: require("../assets/glyphs/0025_B.png").default,logo:require("../assets/logos/0025_DGE_BW.png").default,logo1:require("../assets/logos/0024_Detroit__BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0026_con.png").default, glyph: require("../assets/glyphs/0026_B.png").default,logo:require("../assets/logos/0026_LOVELAND_BW.png").default,logo1:require("../assets/logos/0026_DGE_BW.png").default},
    {id:5,month:24,location:require("../assets/continents/0027_con.png").default, glyph: require("../assets/glyphs/0027_B.png").default,logo:require("../assets/logos/0027_DGE_BW.png").default,logo1:require("../assets/logos/0027_CITYPITTS_BW.png").default},
],
u17: [
    {id:0,month:24,location:require("../assets/continents/0010_con.png").default, glyph: require("../assets/glyphs/0010_B.png").default,logo:require("../assets/logos/0010_geheimagentur_BW.png").default,logo1:require("../assets/logos/0010_HYdrarchy_BW.png").default},
    {id:1,month:18,location:require("../assets/continents/0011_con.png").default, glyph: require("../assets/glyphs/0011_A.png").default,logo:require("../assets/logos/0011_geheimagentur_BW.png").default,logo1:require("../assets/logos/0011_HYdrarchy_BW.png").default},
],
u18:[
    {id:0,month:18,location:require("../assets/continents/0024_con.png").default, glyph: require("../assets/glyphs/0024_B.png").default,logo:require("../assets/logos/0024_DGE_BW.png").default,logo1:require("../assets/logos/0024_Detroit__BW.png").default},
    {id:1,month:18,location:require("../assets/continents/0025_con.png").default, glyph: require("../assets/glyphs/0025_B.png").default,logo:require("../assets/logos/0025_Cuyahoga_BW.png").default,logo1:require("../assets/logos/0025_DGE_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0026_con.png").default, glyph: require("../assets/glyphs/0026_B.png").default,logo:require("../assets/logos/0026_DGE_BW.png").default,logo1:require("../assets/logos/0026_LOVELAND_BW.png").default},
    {id:3,month:24,location:require("../assets/continents/0027_con.png").default, glyph: require("../assets/glyphs/0027_B.png").default,logo:require("../assets/logos/0027_CITYPITTS_BW.png").default,logo1:require("../assets/logos/0027_DGE_BW.png").default},
    {id:4,month:36,location:require("../assets/continents/0053_con.png").default, glyph: require("../assets/glyphs/0053_B.png").default,logo:require("../assets/logos/0053_DESERTEC_BW.png").default,logo1:require("../assets/logos/0053_DESERTEC_BW.png").default},
    {id:5,month:24,location:require("../assets/continents/0084_con.png").default, glyph: require("../assets/glyphs/0084_B.png").default,logo:require("../assets/logos/0084_Dayton_BW.png").default,logo1:require("../assets/logos/0084_MCLB_BW.png").default},
],
 u19:[
    {id:0,month:18,location:require("../assets/continents/0024_con.png").default, glyph: require("../assets/glyphs/0024_B.png").default,logo:require("../assets/logos/0024_DGE_BW.png").default,logo1:require("../assets/logos/0024_Detroit__BW.png").default},
    {id:1,month:18,location:require("../assets/continents/0025_con.png").default, glyph: require("../assets/glyphs/0025_B.png").default,logo:require("../assets/logos/0025_Cuyahoga_BW.png").default,logo1:require("../assets/logos/0025_DGE_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0026_con.png").default, glyph: require("../assets/glyphs/0026_B.png").default,logo:require("../assets/logos/0026_DGE_BW.png").default,logo1:require("../assets/logos/0026_LOVELAND_BW.png").default},
    {id:3,month:24,location:require("../assets/continents/0027_con.png").default, glyph: require("../assets/glyphs/0027_B.png").default,logo:require("../assets/logos/0027_CITYPITTS_BW.png").default,logo1:require("../assets/logos/0027_DGE_BW.png").default},
    {id:4,month:36,location:require("../assets/continents/0053_con.png").default, glyph: require("../assets/glyphs/0053_B.png").default,logo:require("../assets/logos/0053_DESERTEC_BW.png").default,logo1:require("../assets/logos/0053_DESERTEC_BW.png").default},
    {id:5,month:24,location:require("../assets/continents/0084_con.png").default, glyph: require("../assets/glyphs/0084_B.png").default,logo:require("../assets/logos/0084_Dayton_BW.png").default,logo1:require("../assets/logos/0084_MCLB_BW.png").default},
],
 u20: [
    {id:0,month:12,location:require("../assets/continents/0007_con.png").default, glyph: require("../assets/glyphs/0007_B.png").default,logo:require("../assets/logos/0007_SILENTU_BW.png").default,logo1:require("../assets/logos/0007_Sroom_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0008_con.png").default, glyph: require("../assets/glyphs/0008_B.png").default,logo:require("../assets/logos/0008_ringlok_BW.png").default,logo1:require("../assets/logos/0008_Impulse theater_BW.png").default},
    {id:2,month:1,location:require("../assets/continents/0012_con.png").default, glyph: require("../assets/glyphs/0012_B.png").default,logo:require("../assets/logos/0012_FNCSF_BW.png").default,logo1:require("../assets/logos/0012_CSC_BW.png").default},
    {id:3,month:36,location:require("../assets/continents/0044_con.png").default, glyph: require("../assets/glyphs/0044_A.png").default,logo:require("../assets/logos/0044_NIEED_BW.png").default},
    {id:4,month:6,location:require("../assets/continents/0054_con.png").default, glyph: require("../assets/glyphs/0054_A.png").default,logo:require("../assets/logos/0054_SAS_BW.png").default,logo1:require("../assets/logos/0054_CSU_BW.png").default},
    {id:5,month:48,location:require("../assets/continents/0084_con.png").default, glyph: require("../assets/glyphs/0082_B.png").default,logo:require("../assets/logos/0082_MCLB_BW.png").default,logo1:require("../assets/logos/0082_Dayton_BW.png").default},
],
 u21:[
    {id:0,month:12,location:require("../assets/continents/0032_con.png").default, glyph: require("../assets/glyphs/0032_B.png").default,logo:require("../assets/logos/0032_GHC_BW.png").default,logo1:require("../assets/logos/0032_GHC_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0033_con.png").default, glyph: require("../assets/glyphs/0033_B.png").default,logo:require("../assets/logos/0033_Atlascorp_BW.png").default,logo1:require("../assets/logos/0033_GHC_BW.png").default},
    {id:2,month:12,location:require("../assets/continents/0034_con.png").default, glyph: require("../assets/glyphs/0034_B.png").default,logo:require("../assets/logos/0034_Atlascorp_BW.png").default,logo1:require("../assets/logos/0034_GHC_BW.png").default},
    {id:3,month:12,location:require("../assets/continents/0035_con.png").default, glyph: require("../assets/glyphs/0035_B.png").default,logo:require("../assets/logos/0035_AMS_BW.png").default,logo1:require("../assets/logos/0035_Atlascorp_BW.png").default},
    {id:4,month:12,location:require("../assets/continents/0036_con.png").default, glyph: require("../assets/glyphs/0036_B.png").default,logo:require("../assets/logos/0036_Atlascorp_BW.png").default,logo1:require("../assets/logos/0036_GHC_BW.png").default},
    {id:5,month:24,location:require("../assets/continents/0083_con.png").default, glyph: require("../assets/glyphs/0083_B.png").default,logo:require("../assets/logos/0083_Dayton_BW.png").default,logo1:require("../assets/logos/0083_MCLB_BW.png").default},
],
 u22:[
    {id:0,month:6,location:require("../assets/continents/0090_con.png").default, glyph: require("../assets/glyphs/0090_B.png").default,logo:require("../assets/logos/0090_CSU_BW.png").default,logo1:require("../assets/logos/0090_SAS_BW.png").default},
    {id:1,month:12,location:require("../assets/continents/0096_con.png").default, glyph: require("../assets/glyphs/0096_A.png").default,logo:require("../assets/logos/0096_ALASKAMCC_BW.png").default},
]
}

const createUsers = (usersDict) => {
    let users = []
    usersDict.forEach((user => {
        users.push(
            <SnapItem margin={{right: '73px'}} width="100%" height="100%" snapAlign="center">
             <SnapItemContainer>
                    <Location left={'55px'} top={'50px'} src={user.location} alt={'User location'}/>
                    <Logo right={'80px'} bottom={'90px'} src={user.logo} alt={'User logo'}/>
                    <TextBaseManySans style={{position:'relative',right:90,bottom:70}} fontSize={'80px'} >{user.month}</TextBaseManySans>
                    <Glyph bottom={'55px'}  src={user.glyph} alt={'User glyph'}/>
             </SnapItemContainer>
            </SnapItem>
        )
    }))
    return users
}

const createMatches = (userId) => {
    let matchesData = allMatches[userId];
    let matchesRenderReady = []
    matchesData.forEach((match => {
        matchesRenderReady.push(
            <SnapItem margin={{right: '73px'}} width="100%" height="100%" snapAlign="center">
              <SnapItemContainer>
                    <Glyph top={'55px'} src={match.glyph} alt={'User glyph'}/>
                    <Location right ={'25px'} top={'75px'} src={match.location} alt={'User location'}/>
                    <Logo right={'110px'} bottom={'40px'} src={match.logo} alt={'User logo'}/>
                    <TextBaseManySans style={{position:'relative',left:90,bottom:100}} fontSize={'80px'} >{match.month}</TextBaseManySans>
              </SnapItemContainer>
            </SnapItem>
        )
    }))
    return matchesRenderReady;
}

const Matching = () => {

    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const snapList1 = useRef(null);
    useDragToScroll({ref: snapList1, disable: false});

    const goToTopUser = useScroll({ref: snapList});
    const goToBottomUser = useScroll({ref: snapList1});

    React.useEffect(() => {
        // scroll instantly on component did mount
        goToTopUser(2, {animationEnabled: false});
        goToBottomUser(2, {animationEnabled: false});
    }, []);

     let usersTop = createUsers(mainUsers);
     let usersBottom = createMatches("u5");

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{zIndex: 4, position: 'fixed',width:'300px'}}>
                    <SnapList ref={snapList} direction="horizontal"
                              width='308px' height='360px'>
                        {usersTop}
                    </SnapList>
                </div>
                <div style={{zIndex: 3, position: 'fixed' ,width:'300px', marginTop: 240}}>
                    <SnapList ref={snapList1} direction="horizontal"
                              width='308px' height='270px'>
                        {usersBottom}
                    </SnapList>
                </div>
                <div style={{zIndex:4,display: 'flex', flexDirection: 'row', position: 'relative', top: '489px',left:'108px', gap: '30px'}}>
                    <ManyHomeButton path={'/home'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default Matching;

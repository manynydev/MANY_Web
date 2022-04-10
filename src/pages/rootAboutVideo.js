import React from "react";
import {MainContainer, TextBaseGothic, TextBaseManySans,} from "../components/index";
import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "../components/navigationButton";


function RootAboutVideo() {
    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>


    const videoArrowButton = <div style={{display: 'flex', flexDirection: 'row', width: 40, alignItems: 'center'}}>
        <img style={{height: 20, position: "relative", top: 3}} alt="rightBlackArrow" src={rightBlackArrow}/>
        <TextBaseGothic>{"Video"}</TextBaseGothic>
    </div>


    return (
        <MainContainer color={'white'} flexDirection={'column'}>
            <div style={{
                display: "flex",
                alignItems: 'center',
                overflowY: 'scroll',
                flexDirection: 'column',
                gap: 20,
            }}>
                <div style={{lineHeight: 1.7, whiteSpace: 'break-spaces', width: '60%', top: 10, position: 'relative'}}>
                    <TextBaseGothic fontSize={'30px'}>
                        {"MANY Video"}
                        {"\n"}
                        {"\n"}
                    </TextBaseGothic>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            right: 10,
                            bottom: 30,
                            gap: 5
                        }}>
                        <NavigationButton justifyContent={'initial'} width={'130px'} displayComponent={videoArrowButton}
                                          path={"/video"}/>
                    </div>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"1 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"MANY strengthens existing exchange networks with spatial variables and special training opportunities. " +
                        "One scenario links travelers to urban green infrastructure projects on vacant properties in cities like St. Louis, " +
                        "Flint, and Youngstown. A company called Fresh Coast Capital uses the parcels to plant Poplar tree farms that " +
                        "absorb storm water and heavy metals. Trainees might circulate between these and similar projects around the world.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"2 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"Exploiting spatial, atmospheric, and economic variables, utility grade solar power from North Africa might reverse or " +
                        "slow some patterns of migration. Solar companies like TuNur provide domestic and international jobs as well as " +
                        "alternative sources of energy that make the EU less dependent on Russia. \n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"3 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"In cities around the world, financially toxic properties can be revalued for " +
                            "their more tangible urban qualities and relationships. Land banks and crowd " +
                            "sourcing platforms can identify in-kind resources like housing, congregations, " +
                            "schools and other community networks to trade with travelers and investors. Travelers " +
                            "boost the economy and create jobs while also filling special needs.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"4 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"Some exchanges use urban institutions and spaces in novel ways. Cultural " +
                            "institutions in the UK, Germany, Sweden, Jordan, and Greece have hosted The Silent"+
                            "University—a knowledge platform led by lecturers, consultants, and researchers who"+
                            "are otherwise unable to use their professional or academic training because of their"+
                            "immigration status. Urban institutions in cities around the world build similar community"+
                            "networks. Pelin Tan, actively involved in the development of Silent University, is the"+
                            "guest narrator for this scenario.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"5 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"Medical professionals are in short supply around the world. Many countries also need"+
                            "to curate particular professions to retool their economies. More robust sponsoring"+
                            "networks and immigration laws might focus on authorizing multiple visa strings that"+
                            "qualify for internationally recognized accreditation as well as internationally recognized"+
                            "secondary and high school diplomas for dependents.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"6 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"Addressing migrations related to both climate and labor, existing global agricultural"+
                            "networks like The International Livestock Research Institute or the African Goat"+
                            "Improvement Network, among many others, sponsor short term trips for work and"+
                            "research that might be aggregated and accredited. And these relationships facilitate"+
                            "migration in times of political, economic, or environmental emergency.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"7 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"The World Wide Farmer’s Exchange is one of many visa sponsors that find"+
                            "agricultural trainees to intern on farms all around the world. WFE partners with a wide"+
                            "variety of agribusinesses handling livestock, fruits, vegetables, grains, and flowers. With"+
                            "farms all around the world, they provide a range of climate zones and learning"+
                            "experiences. Farmlink organizations around the world make connections between"+
                            "retiring farmers and young farmers looking to affordably relocate.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"8 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"A top destination for American retirees, Ecuador could trade its affordable cities for"+
                            "additional expertise in industry, infrastructure, education, science and technology."+
                            "Encore is a group that places active seniors in these consulting positions. Social"+
                            "Security funds go further. Ecuador gets investment in public healthcare. And the"+
                            "exchange might even sponsor training in the US for Ecuadorian professionals. Santiago"+
                            "del Hierro is the guest designer and narrator for this scenario.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"9 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"A spatial asset can link elderly residents or migrants with younger travelers. A flow of" +
                            "refugees arriving on Italian shores revived the aging town of Riace. An Afghani woman"+
                            "in the Bay Area or a Pakistani man in London who needs help with rent can offer a"+
                            "spare room to a young person needing affordable housing and a familial support"+
                            "system. Some groups even link retiring farmers with able bodied trainees.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"10 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"Some cooperative networks don’t involve travel. Members share knowledge and"+
                           "skills about similar climates or crops from flowers to sweet potatoes. Some networks"+
                           "might share both information and risk related to climate change or sea level rise. A"+
                           "group called MESA provides support for agricultural interns while The Fisherman’s"+
                           "Associated links fisheries in a greying industry with young trainees. Maggie Tsang and"+
                           "Paul Lorenz are the guest designers and narrators for this scenario.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"11 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"MANY can grow networks between art and trade. Two art-activist organizations,"+
                            "Hydrarchy International and Geheimagentur are inverting the use of Hamburg’s old"+
                            "colonial Afrika Terminal. Migrants and others in Hamburg employed at the port are"+
                            "developing small scale trade between Europe and Africa that benefits from migration"+
                            "networks. Sibylle Peters, from Hydrarchy International and Geheimagentur, is the guest"+
                            "narrator for this scenario.\n\n"}
                    </TextBaseGothic>
                    <TextBaseGothic fontWeight={"bold"} fontSize={'30px'}>
                        {"12 "}
                    </TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"Universities and other educational networks have long been the means to organize"+
                            "short term cosmopolitan mobility. Now research institutions are also sharing crucial"+
                            "information about the state of the planet. The wealthiest people in the world can send"+
                            "their children to university to provide another fork in the road as well as time away at a"+
                            "crucial moment. MANY suggests a much broader form of knowledge exchange and"+
                            "training accessible to all and essential to planetary cooperation and solidarity at a"+
                            "moment of climate crisis.\n\n"}
                    </TextBaseGothic>
                </div>
            </div>

            <div style={{
                height: 40,
                // position: 'fixed',
                bottom: 0,
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 150,
                backgroundColor: '#1d1d1d'
            }}>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/'}
                                  displayComponent={homeText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/about'}
                                  displayComponent={aboutText}/>
                <NavigationButton hoverBorder={false} width={'255px'} height={'40px'} path={'/explore'}
                                  displayComponent={exploreText}/>
                <NavigationButton hoverBorder={false} width={'165px'} height={'40px'} path={'/aboutVideo'}
                                  displayComponent={videoText}/>
            </div>
        </MainContainer>
    )
}

export default RootAboutVideo;


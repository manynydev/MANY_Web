import React from "react";
import {MainContainer, TextBaseGothic, TextBaseManySans,} from "../components/index";
import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "../components/navigationButton";


function RootAbout() {
    const aboutText = <TextBaseManySans color='white' fontSize={'30px'}> About </TextBaseManySans>
    const homeText = <TextBaseManySans color='white' fontSize='30px'> Home </TextBaseManySans>
    const exploreText = <TextBaseManySans color='white' fontSize='30px'> Explore </TextBaseManySans>
    const videoText = <TextBaseManySans color='white' fontSize='30px'> Video </TextBaseManySans>


    const exploreArrowButton = <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: 40,
        alignItems: 'center',
        position: 'relative',
        bottom: 3,
        imageRendering: '-webkit-optimize-contrast'
    }}>
        <img style={{height: 20, position: "relative", top: 3}} alt="rightBlackArrow" src={rightBlackArrow}/>
        <TextBaseGothic fontSize='24px'>{"Explore"}</TextBaseGothic>
    </div>

    const videoArrowButton = <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: 40,
        alignItems: 'center',
        position: 'relative',
        bottom: 3,
        imageRendering: '-webkit-optimize-contrast'
    }}>
        <img style={{height: 20, position: "relative", top: 3}} alt="rightBlackArrow" src={rightBlackArrow}/>
        <TextBaseGothic fontSize='24px'>{"Video"}</TextBaseGothic>
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
                        {"About MANY"}
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
                        <NavigationButton justifyContent={'initial'} width={'130px'}
                                          displayComponent={exploreArrowButton} path={"/explore"}/>
                        <NavigationButton justifyContent={'initial'} width={'105px'} displayComponent={videoArrowButton}
                                          path={"/aboutVideo"}/>
                    </div>
                    <TextBaseGothic fontSize={'17px'}>
                        {"MANY experiments with ways to facilitate a global commons through an exchange of needs.\n" +
                        " \n" +
                        "Universities and other educational networks have long been the means to organize short term cosmopolitan mobility.\n" +
                        "Now research institutions are also sharing crucial information about the state of the planet." +
                        "The wealthiest people in the world can send their children to university to provide another fork in the road as well as time away at a crucial moment. MANY suggests a much broader, more accessible, form of knowledge exchange and training that is organized around intervals of time, seasons of a life, and planetary cooperation at a moment of climate crisis. \n" +
                        "\n" +
                        "The platform only more robustly networks existing exchange networks in education, agriculture, medicine, and other industries. While conceived at a moment of digital ubiquity, the real object of the design is a heavy information system (not a sunny one-world sharing app). MANY exists to build spatial networks and cosmopolitan mobility. Users can build many scenarios within the pool of 100 representative entries. Most demonstrate ways that cities can bargain with their underexploited spaces to attract talent and resources???matching their needs to the needs of mobile people to generate mutual benefits?\n" +
                        "\n" +
                        "There are no haves or have-nots and no solutions, only needs and problems to be linked in non-market exchanges. Secure and resourceful group-to-group connections form something like a ???no-tech blockchain??? to build trust and overcome national obstructions. Still even this aggregate of secure platforms lands in currents of migration that are fraught with danger.\n" +
                        "\n" +
                        "Global infrastructure space has streamlined the movements of billions of products and tens of millions of tourists and cheap laborers, but at a time when over 80 million people in the world are displaced, there are still so few ways to handle political, economic, or environmental migrations. The nation-state has a dumb on-off button to grant or deny citizenship/asylum. And the NGOcracy offers as its best idea storage in a refugee camp.\n" +
                        "\n" +
                        "Upstream from the violence of the refugee camp, MANY potentially also offer a global form of matchmaking between the sidelined talents of migrating individuals and a multitude of endeavors and opportunities around the world. \n" +
                        "\n" +
                        "To outwit xenophobic opposition to migration, MANY speaks for those who might say, ???We don???t want your victimhood, your citizenship, your racism, or your bad jobs. We don???t want to stay.??? It serves those who want to resettle but also those who want to keep traveling???who never wanted the citizenship or asylum that the nation withholds or reluctantly bestows.  \n" +
                        "\n"}
                    </TextBaseGothic>
                    <TextBaseGothic
                        style={{position:'relative',left:-7}}fontSize={'17px'} fontWeight={'bold'}> {"MANY at the 2018 Venice Biennale and beyond\n"}</TextBaseGothic>
                    <TextBaseGothic fontSize={'17px'}>
                        {"The curators of the U.S. pavilion at the 2018 Venice Biennale???Niall Atkinson, Ann Lui, Mimi Zeiger, and Iker Gil???established a framework exhibition titled ???The Dimensions of Citizenship?????that explored seven scales of citizenship: Citizen, Civitas, Region, Nation, Globe, Network, and Cosmos. The curators commissioned MANY to address the network scale. A small cohort of Yale students from architecture, computer science, and graphic design constructed the platform and assembled the representative entries.\n" +
                        "\n" +
                        "The platform developed a visual language designed to engender trust. Each group adopts a multi-glyph expression inspired by things like the work of Fluxus member Jurgis Maciunas (Spell your name with these objects), Paul Elliman???s typographies, hobo code, or cuneiform. The graphic language seems to say: The lumpier or more heterogeneous the expression, the sturdier the exchange.\n" +
                        "\n" +
                        "Ten iPhones in the exhibition allowed users to experience the platform, the many matches between entries, and the stories attached to these journeys. A video essay inspired by the collages of Hong Kong artist Ha Bik Chuen and narrated in eleven different languages featured twelve topical episodes that reflect on the wealth of existing and possible exchanges.\n" +
                        "\n" +
                        "In the fall of 2018, MANY was also the subject of an interdisciplinary, university-wide seminar to critically consider the project and rehearse strategies for realizing it. The projects dealt with things like emerging methods for global credentialling or links between retirees and young trainees in the greying industries of agriculture, construction, and fishing.\n" +
                        ""}
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

export default RootAbout;


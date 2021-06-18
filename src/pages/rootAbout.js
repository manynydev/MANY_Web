import React from "react";
import {MainContainer, TextBaseGothic,} from "../components/index";
import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "../components/navigationButton";


function RootAbout() {
    const leftArrowImage = <img style={{height: 35, position: "absolute"}} alt="rightBlackArrow" src={rightBlackArrow}/>
    const largeNavButton = <NavigationButton hoverBorder={true} width={"50px"} height={"40px"}
                                             displayComponent={leftArrowImage} path={"/rootHome"}/>

    return (
        <div>
            <div style={{position: "fixed", top: 475,right:150}}>
                {largeNavButton}
            </div>
            <div style={{whiteSpace: 'pre-wrap', width: 900, margin: 'auto'}}>
                <TextBaseGothic fontSize={'50px'}>
                    {"MANY"}
                    {"\n"}
                    {"\n"}
                </TextBaseGothic>
                <TextBaseGothic>
                    {"MANY is a global commons that facilitates migration and cooperation through an exchange of needs."}
                    {"\n"}
                    {"\n"}
                    {"Global infrastructure space has perfectly streamlined the movements of billions of products and tens of millions of tourists and cheap laborers, but at a time when over 80 million people in the world are displaced, there are still so few ways to handle political, economic, or environmental migrations. The nation-state has a dumb on-off button to grant or deny citizenship/asylum. And the NGOcracy offers as its best idea storage in a refugee camp—a form of detention lasting on average 17 years."}
                    {"\n"}
                    {"\n"}
                    {"Upstream from the violence of the refugee camp, MANY considers a global form of matchmaking between the sidelined talents of migrating individuals and a multitude of endeavors and opportunities around the world. The platform more robustly networks existing organizations to create short term, project-based journeys and cooperative exchanges organized around intervals of time or seasons of a life."}
                    {"\n"}
                    {"\n"}
                    {"To outwit xenophobic opposition to migration, MANY speaks for those who might say, \"We don’t want your victimhood, or your citizenship, or your segregation or your bad jobs. We don’t want to stay.\" It serves those who want to resettle but also those who want to keep traveling—who never wanted the citizenship or asylum that the nation withholds or reluctantly bestows."}
                    {"\n"}
                    {"\n"}
                    {"While conceived at a moment of digital ubiquity, the real object of the design is a heavy information system (not a sunny one-world sharing app). MANY exists to build spatial networks and cosmopolitan mobility. Cities can bargain with their underexploited spaces to attract talent and resources—matching their needs with the needs of mobile people to generate mutual benefits."}
                    {"\n"}
                    {"\n"}
                    {"There are no have or have-nots and no solutions, only needs and problems to be linked in non-market exchanges. Persistent and resourceful group-to-group connections form a no-tech blockchain to increase security and overcome national obstructions."}
                    {"\n"}
                    {"\n"}
                    {"Far from excluded or marginalized, can this mobile population acquires special skills and credentials for global leadership? Can these sorts of exchanges also develop solidarity among global activists capable of address planetary crises."}
                    {"\n"}
                    {"\n"}
                    {"The curators of the U.S. pavilion at the 2018 Venice Biennale—Niall Atkinson, Ann Lui, Mimi Zeiger,and Iker Gil—established a framework exhibition titled \"The Dimensions of Citizenship\" that explored seven scales of citizenship: Citizen, Civitas, Region, Nation, Globe, Network, and Cosmos. The curators commissioned MANY to address the network scale."}
                    {"\n"}
                    {"\n"}
                    {"A small cohort of Yale students from architecture, computer science, and graphic design assembled almost 100 representative entries for the platform. Each of the entries gathers many existing sponsors in education, agriculture, medicine, and other industries and strengthens them with spatial variables."}
                    {"\n"}
                    {"\n"}
                    {"The platform developed a visual language designed to engender trust. Each group adopts a multi-glyph expression inspired by things like the work of Fluxus member Jurgis Maciunas (Spell your name with these objects), Paul Elliman\"s typographies, hobo code or cuneiform. The graphic language seems to say: The lumpier or more heterogeneous the expression, the sturdier the exchange."}
                    {"\n"}
                    {"\n"}
                    {"Ten iPhones in the exhibition allowed users to experience the platform, the many matches between entries, and the stories attached to these journeys. A video essay inspired by the collages of Hong Kong artist Ha Bik Chuen and narrated in eleven different languages featured twelve topical episodes that reflect on the wealth of existing and possible exchanges."}
                    {"\n"}
                    {"\n"}
                    {"In the fall of 2018, MANY was also the subject of an interdisciplinary university-wide seminar to critically consider the project and rehearse strategies for realizing it. The projects dealt with things like emerging methods for global credentialling or links between retirees and young trainees  in the greying industries of agriculture, construction and fishing."}
                </TextBaseGothic>
            </div>
        </div>
    )
}

export default RootAbout;


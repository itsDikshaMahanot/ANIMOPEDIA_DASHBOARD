import React from "react";
import "@material-tailwind/react/tailwind.css";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

const card_info =[
    {id: '1' ,
     image:'https://smnewsnet.com/wp-content/uploads/2020/05/German-Shepherd.jpg',
     title:'German-Shepherd'},
     {id: '2' ,
     image:'https://smnewsnet.com/wp-content/uploads/2020/05/German-Shepherd.jpg',
     title:'German-Shepherd'},
     {id: '3' ,
     image:'https://smnewsnet.com/wp-content/uploads/2020/05/German-Shepherd.jpg',
     title:'German-Shepherd'},
     {id: '4' ,
     image:'https://smnewsnet.com/wp-content/uploads/2020/05/German-Shepherd.jpg',
     title:'German-Shepherd'},
]

const card_render = (card , id ) => {
    return(
        <div className="ml-2 lg:ml-1 mr-5 mt-4 mb-4 ">
               <Card >
            <CardImage 
                src={card.image}
                alt={card.title}
            />
            <CardBody>
                <H6 color="gray">{card.title}</H6>
                <Paragraph color="gray">
                    Don't be scared of the truth because we need to restart the human
                    foundation in truth And I love you like Kanye loves Kanye I love
                    Rick Owens’ bed design but the back is...
                </Paragraph>
            </CardBody>
            </Card>
        </div>  
    )

}
export default function Insert() {
    return (
        <div className="grid grid-cols-1 bg-gray-50  lg:grid-cols-4 ml-1 mr-1 h-auto pb-4 pt-4">
            {card_info.map(card_render)}        
    </div>


   
    );
}
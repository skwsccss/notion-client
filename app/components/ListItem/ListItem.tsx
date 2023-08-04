import { FC } from "react";

interface ListItemProps {
    data: any
}
const ListItem: FC<ListItemProps> = ({ data }) => {
    return (
        <div className="flex mb-3 cursor-pointer" onClick={() =>  window.open(data.public_url)}>
            <span className="mr-3">{data.icon.emoji}</span>
            <p className="font-bold text-md">{data.properties.title.title[0].plain_text}</p>
        </div>
    )
}

export default ListItem;
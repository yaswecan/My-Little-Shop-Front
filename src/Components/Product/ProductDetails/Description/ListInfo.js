import { List, ListItem, Typography } from "@mui/material";

//Styles
import useStyles from "Styles/Product/ListInfo.styles";

//Data
import singleData from "Data/product.data";

const ListInfo = () => {
    const classes = useStyles();
    return (
        <List className={classes.List}>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Closure
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.closure}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Sizes
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.sizes &&
                        singleData.sizes.map((size, i) => (
                            <Typography key={i} variant="body1" component="span">
                                {(i ? ', ' : '') + size.value}
                            </Typography>
                        ))
                    }
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Wight
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.wight}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Height
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.height}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Lenght
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.lenght}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Fit
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.fit}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Main Metarial
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.mainMaterial}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Sizes
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.suitable &&
                        singleData.suitable.map((item, i) => (
                            <Typography key={i} variant="body1" component="span">
                                {(i ? ', ' : '') + item.value}
                            </Typography>
                        ))
                    }
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    Brand
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.brand}
                </Typography>
            </ListItem>
            <ListItem direction="row">
                <Typography variant="body1" component="h6">
                    SKU
                </Typography>
                <Typography variant="body1" component="p">
                    {singleData.sku}
                </Typography>
            </ListItem>
        </List>
    );
};
export default ListInfo;
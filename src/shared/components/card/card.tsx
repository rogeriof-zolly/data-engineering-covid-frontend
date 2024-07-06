import { Box, Typography } from "@mui/material";

type CardProps = {
    title: string;
    value: number;
}

export const Card = ({title, value}: CardProps) => {

    function formatValue() {
        return (value > 1000) ? (value/1000).toFixed(2) + "K": value;
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #fff",
            borderRadius: 2,
            padding: 2,
            margin: 2,
            width: 200,
            height: 120,
            textAlign: "center"
        
        }}>
            <Typography variant="subtitle1" color="#fff">{title}</Typography>
            <Typography variant="h4" color="#fff">{formatValue()}</Typography>
        </Box>
    );
}
import { Card } from '../card/card';
import { Grid, Typography } from '@mui/material';

type CardItens = {
    title: string;
    value: number;
}

type CardRowProps = {
    title: string;
    values: CardItens[];
}

export const CardRow = ({title, values}: CardRowProps) => {
    return (
        <Grid container direction={"row"} xs={12}>
            <Grid container item xs={12} marginLeft={6}>
                <Typography variant='h4' color="#fff">{title}</Typography>
            </Grid>

            {values.map((item) => (
                <Grid container item xs justifyContent={"center"}>
                    <Card title={item.title} value={item.value} />
                </Grid>
            ))}
        </Grid>
    );
}
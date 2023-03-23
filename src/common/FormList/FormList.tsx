import { Container, Grid, Text, Link } from "@nextui-org/react";
import React from "react";

interface Form {
    name: string;
    formId: string;
}

type FormListItemProps = Form;

const FormListItem: React.FC<FormListItemProps> = ({name, formId}) =>
    <li>
        <Link block href={formId}>
            {name}
        </Link>
    </li>
;

interface FormListProps {
    forms: Array<Form>;
}

const FormList: React.FC<FormListProps> = ({forms}) => {
    const formLinks = forms.map(
        ({name, formId}) => <FormListItem key={formId} name={name} formId={formId} />
    );

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={0} sm={2} />
            <Grid xs={12} sm={10}>
                <Container>
                    <Text h1>Forms</Text>
                    {formLinks}
                </Container>
            </Grid>
            <Grid xs={0} sm={2} />
        </Grid.Container>
    )
};

export { FormList };
export type { Form };

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteIterm';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
 

import { Container, Form } from './styles';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">Voltar</a>                       
                    </header>

                    <Input placeholder="Título" />

                    <Textarea placeholder="Obeservações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rockeseat.com.br" />
                        <NoteItem placeholder="Novo Link" isNew />
                    </Section>


                    <Section title="Marcadores">
                        <div className='tags'>
                          <NoteItem value="React" />
                          <NoteItem placeholder="Novo Tag" isNew />
                        </div>

                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}
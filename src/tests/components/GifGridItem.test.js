import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas a <GifGridItem >', () => {
    
    const title = 'Un Título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/>)

    test('Se debe de mostrar el componente correctamente ', () => {
        
        expect( wrapper).toMatchSnapshot();

    });

    test('Debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);

    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        // console.log(img.props('src'));
        expect(img.prop('src') ).toBe(url);
        expect(img.prop('alt') ).toBe(title);

    });

    test('Debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        // console.log(div.props('className'))
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    });
    
    
})

import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
`;


const Reviews = styled.div`
font-size: 17px;
font-weight: 400;

& span {
    color:#46A358;
    font-weight: 700;
    margin-right: 30px;
}

`;
const Line = styled.div`
  border-bottom: 3px solid #46A358;
  width: 160px;
  margin-top: 6px;
  margin-bottom: 18px;
`;

const Container_t = styled.div`
font-size: 14px;
font-weight: 400;
 width: 1300px;
`;

const Text1 = styled.div`
& p {
    margin-bottom: 35px;
    color: #727272;

}
`;

const Text2 = styled.div`
& p {
    margin-bottom: 20px;
    color: #727272;
}
`;

const Text3 = styled.div`
& p {
    font-weight: 800;
    margin-bottom: 10px;
}
`;

const Text4 = styled.div`
& p {
    margin-bottom: 20px;
    color: #727272;
}
`;

const Text5 = styled.div`
& p {
    font-weight: 800;
    margin-bottom: 10px;
}
`;

const Text6 = styled.div`
& p {
    margin-bottom: 20px;
    color: #727272;
}
`;

const Text7 = styled.div`
& p {
    font-weight: 800;
    margin-bottom: 10px;
}
`;

const Text8 = styled.div`
& p {
    color: #727272;
}
`;

const Offset_container = styled.div`

`;

function Product() {
    return (
        <Container>
            <Offset_container>
            <Reviews>
                <span>Product Description</span>Reviews (19)
            </Reviews>
            <Line>
            </Line>
            <Container_t>
                <Text1><p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p></Text1>
                <Text2><p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.</p></Text2>
                <Text3><p>Living Room:</p></Text3>
                <Text4><p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Text4>
                <Text5><p>Dining Room:</p></Text5>
                <Text6><p>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p></Text6>
                <Text7><p>Office:</p></Text7>
                <Text8><p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Text8>
            </Container_t>
            </Offset_container>
        </Container>
    )
}
export default Product
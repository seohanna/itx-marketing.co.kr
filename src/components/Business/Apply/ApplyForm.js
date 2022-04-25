import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import CheckBox from '../../CheckBox';
import selectBoxIcon from '../../../img/sub/selectboxIcon.svg';
import Button from '../../Button';
import ApplyModal from '../../Modal/ApplyModal';

function ApplyForm({
  name, corporate,corporation, inherit, individual, business
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const form = useRef();
  const openModal = () => { 
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fkovx9j', form.current.name , form.current, 'eUYGVLXHP_B036Uyh')
      .then((result) => {
          console.log(result.text);
          alert('신청이 완료됬습니다.')
         	window.location.reload();
      }, (error) => {
          console.log(error.text);
          alert('정상적인 제출이 이루어지지 않았습니다. 다시 신청해주세요.');
          window.location.reload();
      });
  };

  return (
      <Form onSubmit={sendEmail} ref={form} name='template_evvw7vb'>
        {/* {business && (
          <>
            <InputWrap>
              <InputBox>
                <p>성명</p>
                <input type='text' placeholder={'이름을 입력하세요'} name={individual? 'individual_name' : 'expert_name'} />
              </InputBox>
              <InputBox>
                <p>지역</p>
                <input type='text' placeholder='시도 단위로 입력하세요' name={individual? 'individual_area' : 'expert_area'} />
              </InputBox>
            </InputWrap>
            <InputWrap>
              <InputBox>
                <p>생년월일</p>
                <input type='text' placeholder={'생년월일을 입력하세요 (ex: 770322)'} name={individual? 'individual_birth' : 'expert_birth'} />
              </InputBox>
              <InputBox>
                <p>연락처</p>
                <input type='text' placeholder='‘-’없이 번호만 입력해 주세요' name={individual? 'individual_tel' : 'expert_tel'}/>
              </InputBox>
            </InputWrap>
            <CheckBoxContainer>
              <CheckBox 
                onClick={openModal} 
                apply
                name={individual? 'individual_private': 'expert_private'}
              />
            </CheckBoxContainer>
          </>
        )} */}
        {corporate && (
         <>
          <InputWrap>
            <InputBox>
              <p>회사명</p>
              <input type='text' placeholder={'회사명을 입력하세요'} name={'corporate_name'} />
            </InputBox>
            <InputBox>
              <p>지역</p>
              <input type='text' placeholder='시도 단위로 입력하세요' name={'corporate_area'}/>
            </InputBox>
          </InputWrap>
          <InputWrap>
            <InputBox>
              <p>담당자</p>
              <input type='text' placeholder={'담당자 성함을 입력하세요'} name={'corporate_manager'} />
            </InputBox>
            <InputBox>
              <p>연락처</p>
              <input type='text' placeholder='‘-’없이 번호만 입력해 주세요' name={'corporate_tel'}/>
            </InputBox>
          </InputWrap>
          <InputWrap>
            <p>상담분야</p>
            <select name='corporate_consulting_type'>
              <option>원하는 컨설팅 분야를 선택해 주세요.</option>
              <option value={'고용지원'}>고용지원</option>
              <option value={'정책자금'}>정책자금</option>
              <option value={'기업대출'}>기업대출</option>
              <option value={'노무/세무'}>노무/세무</option>
              <option value={'기타문제'}>기타문제</option>
            </select>
          </InputWrap>
          <CheckBoxContainer>
            <CheckBox 
              onClick={openModal} 
              apply
              name={'corporate_private'}
            />
          </CheckBoxContainer>
        </>
        )}
        {/* {corporation && (
          <>
            <InputWrap>
              <InputBox>
                <p>성명</p>
                <input type='text' placeholder={'이름을 입력하세요'} name='corporation_name' />
              </InputBox>
              <InputBox>
                <p>지역</p>
                <input type='text' placeholder='시도 단위로 입력하세요' name='corporation_area' />
              </InputBox>
            </InputWrap>
            <InputWrap>
              <InputBox>
                <p>담당자</p>
                <input type='text' placeholder='담당자 성함을 입력하세요' name='corporation_manager' />
              </InputBox>
              <InputBox>
                <p>연락처</p>
                <input type='text' placeholder='‘-’없이 번호만 입력해 주세요' name='corporation_tel' />
              </InputBox>
            </InputWrap>
            <InputWrap>
              <p>상담분야</p>
              <select name='corporation_consulting_type'>
                <option>원하는 컨설팅 분야를 선택해 주세요.</option>
                <option value={'고용지원'}>고용지원</option>
                <option value={'정책자금'}>정책자금</option>
                <option value={'기업대출'}>기업대출</option>
                <option value={'노무/세무'}>노무/세무</option>
                <option value={'기타문제'}>기타문제</option>
              </select>
            </InputWrap>
            <CheckBoxContainer>
              <CheckBox 
                onClick={openModal} 
                apply
                name={'corporation_private'}
              />
            </CheckBoxContainer>
          </>
        )} */}
        {/* {inherit && (
          <>
            <InputWrap>
              <InputBox>
                <p>성명</p>
                <input type='text' placeholder={'이름을 입력하세요'} name='inherit_name' />
              </InputBox>
              <InputBox>
                <p>지역</p>
                <input type='text' placeholder='시도 단위로 입력하세요' name={'inherit_area'} />
              </InputBox>
            </InputWrap>
            <InputWrap>
              <InputBox>
                <p>생년월일</p>
                <input type='text' placeholder={'생년월일을 입력하세요 (ex: 770322)'} name={'inherit_birth'} />
              </InputBox>
              <InputBox>
                <p>연락처</p>
                <input type='text' placeholder='‘-’없이 번호만 입력해 주세요' name={'interit_tel'} />
              </InputBox>
            </InputWrap>
          <InputWrap>
            <p>상담분야</p>
            <select name='inherit_consulting_type'>
              <option>원하는 컨설팅 분야를 선택해 주세요.</option>
              <option value={'상속문제'}>상속문제</option>
              <option value={'증여문제'}>증여문제</option>
              <option value={'재무설계'}>재무설계</option>
              <option value={'기타문제'}>기타문제</option>
            </select>
          </InputWrap>
          <InputWrap>
            <p>기타사항</p>
            <textarea className='textarea' type='text' placeholder={'상담가능일자, 가족관계 등 상담에 필요한 내용을 적어 주세요'} name={'interit_etc'}/>
          </InputWrap>
          <CheckBoxContainer>
            <CheckBox 
              onClick={openModal} 
              apply
              name={'inherit_private'}
            />
          </CheckBoxContainer>
        </>
        )} */}
        <ButtonContainer>
          <Button type="submit" value="Send" size={'md2'}>상담하기 &#62;&#62;</Button>
        </ButtonContainer>
        {
           modalVisible && (
             <ApplyModal onClick={closeModal} />
           )
        }  
      </Form>
  );
};

export default ApplyForm;


const Form = styled.form`
  padding: 7.1% 9.62962962962963% 0;
  border: 2px solid #B8292D;

  @media(max-width: 700px) {
    padding: 11.7% 6.8% 0;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4.5%;

  select {
    width: 92.3%;
    border: 1px solid #BEBEBE;
    height: 50px;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 0.8rem;
    color: #C4C4C4;
    padding-left: 1.2%;
    background: url(${selectBoxIcon}) calc(100% - 15px) center no-repeat;
  }

  input {
    width: 92.3%;
    border: 1px solid #BEBEBE;
    height: 50px;
    padding-left: 1.2%;
    
    ::placeholder {
      color: #C4C4C4;
      font-size: 0.8rem;
    }
  }

  textarea {
    width: 92.3%;
    border: 1px solid #BEBEBE;
    height: 50px;

    margin: 0;
    padding: 0;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #C4C4C4;
      font-size: 0.8rem;
      line-height: 48px;
      padding: 0 0 0 1.2%;
    }
  }

  @media(max-width: 700px) {
    flex-flow: column;
    align-items: flex-start;
    padding-bottom: 0%;
    > p {
      font-size: 0.9375rem;
      padding: 5% 0;
      
    }
    select {
      width: 100%;
      font-size: 0.75rem;
      padding-left: 5%;
    }

    input {
      width: 100%;
      ::placeholder {
        font-size: 0.8125rem;
      }
    }

    textarea {
      width: 100%;
      height: 139px;
      padding-left: 5%;
      ::placeholder {
        white-space: pre-wrap;
        font-size: 0.75rem;
        padding: 2% 22% 0 0;
        line-height: 1rem;
      }
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  width: 38.03680981595092%;
  justify-content: space-between;
  align-items: center;
  > p {
    color: #1A1A1A;
    font-size: 1rem;
    margin: 5% 0;
  }

  > input {
    border: 1px solid #BEBEBE;
    width: 80.80808080808081%;
    height: 50px;
    padding-left: 3.5%;
    ::placeholder {
      color: #C4C4C4;
      font-size: 0.8rem;
    }
  }
  @media(max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    > input {
      width: 100%;
    }
  }
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    width: 336px;
  }

  @media(max-width: 700px) {
    > div {
      width: 100%;
      padding: 17% 0;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3.5% 0 6.7% 0;

  @media(max-width: 700px) {
    padding: 3.5% 0 12% 0;
  }
`;

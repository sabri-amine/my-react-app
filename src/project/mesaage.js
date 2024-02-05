import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px 0 0 0;
`;

const CommentSection = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
`;

const CommentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const Comment = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  align-items: center;
  width: 300px;
  overflow: hidden;
  background-color: #f0f0f0;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CommentText = styled.div`
  margin-right: 10px;
  color:#000;
  
`;

const DeleteButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CommentButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:300px
`;

const FixedCommentWrapper = styled.div`
display:flex;
`;

const FixedComment = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
flex-direction: column;
width:37%;
margin:20px;


  p {
    margin: 0;
  }
`;

const Coommenter = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <PageWrapper>
      <h1 style={{fontWeight:"bold",color:'#fff'}}>LES COMMENTER</h1>
      <CommentSection>
        <FixedCommentWrapper>
          <FixedComment>
            <p>Le film c'est magnifique</p>
            <DeleteButton>Supprimer</DeleteButton>
          </FixedComment>
          <FixedComment>
            <p>Beau résumé</p>
            <DeleteButton>Supprimer</DeleteButton>
          </FixedComment>
          <FixedComment>
            <p>Super film a regarder </p>
            <DeleteButton>Supprimer</DeleteButton>
          </FixedComment>
          <FixedComment>
            <p>Le site c'est magnifique</p>
            <DeleteButton>Supprimer</DeleteButton>
          </FixedComment>
        </FixedCommentWrapper>

        <CommentList>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <CommentText>{comment}</CommentText>
              <DeleteButton onClick={() => handleDeleteComment(index)}>
                Supprimer
              </DeleteButton>
            </Comment>
          ))}
        </CommentList>
        
        <CommentForm onSubmit={handleAddComment}>
          <CommentInput
            type="text"
            placeholder="Ajouter un commentaire..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <CommentButton type="submit">Ajouter un commentaire</CommentButton>
        </CommentForm>
      </CommentSection>
    </PageWrapper>
  );
};

export default Coommenter;




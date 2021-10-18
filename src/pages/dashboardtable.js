import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlipCardAll } from '../action/FlipCardAll';
import { FlexiApiDelete } from '../action/FlipDelete';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import{ Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Modal,Box,Typography }from '@material-ui/core';
import { useDarkMode } from '../util/theme'
const Dashboard = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const dispatch = useDispatch();
  const [deletelinkid, setDeleteLinkid] = useState('');
  const [deletecardtype, setDeletecardtype] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (keyvalue, cardtype) => {
    console.log(keyvalue);
    setDeleteLinkid(keyvalue);
    setDeletecardtype(cardtype);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(deletelinkid);
    dispatch(FlexiApiDelete(deletelinkid, deletecardtype));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const FlipCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall[0]
  );
  const NormalCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall[1]
  );
  const PricingCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall[2]
  );
  const cardDelete = useSelector((state) => state.flipdeleteReducer.flip?.data);
  const history = useHistory();
  console.log(cardDelete);

  useEffect(() => {
    const user = localStorage.getItem('profile');
    if (!user) {
      history.push('/auth/signin');
    }
  }, []);

  useEffect(() => {
    dispatch(FlipCardAll());
  }, [dispatch, cardDelete]);

  let MixedArray = [];
  if (FlipCardSelector && PricingCardSelector && NormalCardSelector) {
    MixedArray = [
      ...FlipCardSelector,
      ...PricingCardSelector,
      ...NormalCardSelector,
    ];
  }
  const rows = [];
  function createData(key,name, calories, fat, carbs,) {
    return { key,name, calories, fat, carbs };
  }
  if (FlipCardSelector && PricingCardSelector && NormalCardSelector) {
    for(let i = 0;i < MixedArray.length;i++){
      rows.push(
        createData(i,MixedArray[i]['_id'],MixedArray[i]['cardtype'],`https://app.flexi.cards/${MixedArray[i]['cardtype'].toLowerCase()}?id=${MixedArray[i]['_id']}`,MixedArray[i]['sheetid'])
      )
    }
  }
  const dark = useDarkMode();
  return (
    <div className='dashboard' style={{ fontFamily: 'Poppins' }}>
      <h1>Dashboard</h1>
      <div className='button-flex'>
        <a href='/userarea'>
          <button className='addnew' style={{color:`${dark.value === true ? 'white' : 'black' }`}}>Add New</button>
        </a>
      </div>
      {/* <Table columns={columns} dataSource={data} pagination={false} /> */}
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Card Id</TableCell>
            <TableCell >Card Type</TableCell>
            <TableCell >Iframe Link</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell ><a href={row.fat} style={{textDecoration:'none',color:'blue'}}>{row.fat}</a></TableCell>
              <TableCell ><div>
             <button
              style={{
                background: 'none',
                border: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              onClick={() => showModal(row.name, row.calories)}
            >
              <DeleteFilled style={{ fontSize: '20px', marginRight: '10px' ,color:`${dark.value === true ? 'white' : 'black' }`}} />
            </button>
            <Link
              to={`update/${row.calories}?id=${row.name}&sheet=${row.carbs}`}
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <EditFilled
                  style={{
                    fontSize: '20px',
                    color:`${dark.value === true ? 'white' : 'black' }`,
                    marginLeft: '10px',
                  }}
                />
              </button>
            </Link>
            <Modal
        open={isModalVisible}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to Delete a card ?  
          </Typography>
          <div className="modal-buttons">
          <button onClick={handleOk}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
          </div>
        </Box>
      </Modal>
          </div>
          </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Dashboard;

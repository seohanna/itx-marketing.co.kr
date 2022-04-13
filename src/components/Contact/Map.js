/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapContainer = styled.div`
  margin: 0 6.3% 2.8%;
  .map-wrap {
      margin: 0;
      height: 500px;
    }
  @media(max-width:700px){
    margin: 0 2% 10%;
    .map-wrap {
      height: 250px;
    }
  }
`;

const Map = (props) => {

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3,
    };
    // 지도 생성
    var map = new kakao.maps.Map(mapContainer, mapOptions);
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(props.address, function(result, status) {

    // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new kakao.maps.Marker({
            map: map,
            position: coords
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.name}</div>`
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
      }
      console.log(props)
    });
  });
  
  return (
    <MapContainer>
      <div className='map-wrap'>
        <div 
          id="map"
          style={{
            width: '100%',
            height: '100%'
          }}
        >
        </div>
      </div>
    </MapContainer>
  );
}
export default Map;
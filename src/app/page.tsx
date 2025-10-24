'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previousMinute = useRef<number>(null);

  useEffect(() => {
    // 오디오 객체 생성(CSL)
    audioRef.current = new Audio('/alarm.mp3');
    audioRef.current.volume = 1.0;

    const timer = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);

      // 정각 체크
      if (
        isAlarmEnabled &&
        previousMinute.current !== undefined &&
        previousMinute.current !== newTime.getMinutes() &&
        newTime.getMinutes() === 0
      ) {
        console.log('알람 울림');
        playAlarm(); // 첫 1회만 울림?
      }
      previousMinute.current = newTime.getMinutes();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const playAlarm = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
    } catch (error) {
      console.error('알람 재생 실패:', error);
    }
  };

  const testAlarm = () => {
    playAlarm();
  };
  // testAlarm();
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center'>
      <div className='text-center'>
        {/* 시간 표시 */}
        <div className='text-6xl md:text-8xl font-mono font-bold text-white mb-4 tracking-wider'>
          {formatTime(time)}
        </div>

        {/* 날짜 표시 */}
        <div className='text-xl md:text-2xl text-gray-300 font-light mb-8'>{formatDate(time)}</div>

        {/* 알람 컨트롤 */}
        <div className='space-y-4'>
          <button
            onClick={() => setIsAlarmEnabled(!isAlarmEnabled)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isAlarmEnabled ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-500 hover:bg-gray-600 text-white'
            }`}>
            {isAlarmEnabled ? '🔔 알람 켜짐' : '🔕 알람 꺼짐'}
          </button>

          <button
            onClick={testAlarm}
            className='ml-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors'>
            🎵 알람 테스트
          </button>
        </div>

        {/* 다음 정각까지 남은 시간 */}
        <div className='mt-6 text-gray-400'>
          다음 알람까지: {60 - time.getMinutes() === 60 ? 0 : 60 - time.getMinutes()}분 {60 - time.getSeconds()}초
        </div>

        {/* 장식용 원 */}
        <div className='mt-8 flex justify-center space-x-2'>
          <div
            className={`w-3 h-3 rounded-full transition-colors ${
              isAlarmEnabled ? 'bg-green-400' : 'bg-white opacity-60'
            }`}></div>
          <div className='w-3 h-3 bg-white rounded-full opacity-40'></div>
          <div className='w-3 h-3 bg-white rounded-full opacity-20'></div>
        </div>
      </div>
    </div>
  );
}

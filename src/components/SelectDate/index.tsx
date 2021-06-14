import { ChangeEvent, MouseEvent, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Container, Button, Select, Option } from "./styles";

export function SelectDate() {
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  const { allTransactions, setFilteredTransactionsByDate } =
    useContext(TransactionsContext);

  useEffect(() => {
    const alldates = new Set(
      allTransactions.map((transaction) => transaction.yearMonth)
    );

    setDates(Array.from(alldates));
    setSelectedDate(Array.from(alldates)[0]);
  }, [allTransactions]);

  useEffect(() => {
    setFilteredTransactionsByDate(
      allTransactions.filter(
        (transactions) => transactions.yearMonth === selectedDate
      )
    );
  }, [selectedDate]);

  function handleSelectDate(event: ChangeEvent<HTMLSelectElement>) {
    const date = event.target.value;

    setSelectedDate(date);
  }

  function handlePreviousDate() {
    const dateIndex = dates.findIndex((date) => date === selectedDate);

    if (dateIndex > 0) {
      setSelectedDate(dates[dateIndex - 1]);
    }
  }

  function handleNextDate() {
    const dateIndex = dates.findIndex((date) => date === selectedDate);

    if (dateIndex < dates.length - 1) {
      setSelectedDate(dates[dateIndex + 1]);
    }
  }

  return (
    <Container>
      <Button
        onClick={handlePreviousDate}
        disabled={dates.findIndex((date) => date === selectedDate) === 0}
      >
        {"<"}
      </Button>
      <Select value={selectedDate} onChange={handleSelectDate}>
        {dates.map((date) => (
          <Option key={date} value={date}>
            {date}
          </Option>
        ))}
      </Select>
      <Button
        onClick={handleNextDate}
        disabled={
          dates.findIndex((date) => date === selectedDate) >= dates.length - 1
        }
      >
        {">"}
      </Button>
    </Container>
  );
}

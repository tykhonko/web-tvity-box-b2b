import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks/redux";
import { getWarehouse } from "store/reducers/warehouseReducer/warehouseActions";
import WarehouseAutocomplete from "./WarehouseAutocomplete";

interface WarehouseAutocompleteContainerProps {
  index: number;
  cityRef: string;
  warehouse: string;
  setFieldValue: (name: string, value: any) => void;
}

const WarehouseAutocompleteContainer: React.FC<WarehouseAutocompleteContainerProps> =
  ({ index, cityRef, warehouse, setFieldValue }) => {
    const dispatch = useDispatch();

    const { result } = useAppSelector((state) => state.warehouseReducer);

    const handleGetOptions = useCallback(
      () => dispatch(getWarehouse(cityRef)),
      [cityRef, dispatch]
    );

    useEffect(() => {
      if (cityRef) {
        dispatch(getWarehouse(cityRef));
      }
    }, [dispatch, cityRef]);

    return (
      <WarehouseAutocomplete
        options={result}
        index={index}
        warehouse={warehouse}
        setFieldValue={setFieldValue}
        onGetOptions={handleGetOptions}
      />
    );
  };

export default WarehouseAutocompleteContainer;

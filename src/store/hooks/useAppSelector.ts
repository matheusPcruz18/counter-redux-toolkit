import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootstate } from "../types";


export const useAppSelector: TypedUseSelectorHook<rootstate> = useSelector;
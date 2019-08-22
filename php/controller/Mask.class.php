<?php

class Mask{
    public static function dataUsToBr($data){
        $dataBr="";
        if(strlen($data)==10){
            $data=explode("-",$data);
            $dataBr = $data[2]."/".$data[1]."/".$data[0];

            return $dataBr;
        }else{
            return "null";
        }
    }
    public static function dataBrToUs($data){
        $dataBr="";
        if(strlen($data)==10){
            $data=explode("/",$data);
            $dataBr = $data[2]."-".$data[1]."-".$data[0];

            return $dataBr;
        }else{
            return "null";
        }
    }
    public static function moneyUsToBr($money){
        
        return number_format($money,2,",",".");
    }
    public static function moneyUsToBr2($money){
        
        return "R$ ".number_format($money,2,",",".");
    }
    public static function cnpjFormatted($val){
        if(strlen($val)==14){
            $val = substr($val,0,2).".".substr($val,2,3).".".substr($val,5,3)."/".substr($val,8,4)."-".substr($val,12,2);
            return $val;
        }else if(strlen($val)==11){
            $val = substr($val,0,3).".".substr($val,3,3).".".substr($val,6,3)."-".substr($val,9,2);
            return $val;
        }else{
            return "";
        }
    }
}

?>
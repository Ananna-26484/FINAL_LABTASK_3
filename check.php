<?php
if(isset($_GET['submit']))
{
	
    $name=$_GET['username'];
	if(strlen($name)>0)
	{
		echo"Name:  ";
        echo $name ;      
		
	}
	else
	{
		echo "Name can not be empty";
    }   
	    
}

?>
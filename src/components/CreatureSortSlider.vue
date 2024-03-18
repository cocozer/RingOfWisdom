
<template>
    <div class="custom-wrapper">
        <div class="header"></div>

        <div class="hp-input-container">
            <div class="hp-input">
                <div class="hp-field">
                    <span>Minimum HP</span>
                    <input
                        type="number"
                        class="min-input"
                        :value="sortMinHP"
                        @input="selectSortMinHP"
                    />
                </div>
                <div class="hp-field">
                    <span>Maximum HP</span>
                    <input
                        type="number"
                        class="max-input"
                        :value="sortMaxHP"
                        @input="selectSortMaxHP"
                    />
                </div>
            </div>
            <div class="slider-container">
                <div class="hp-slider"></div>
            </div>
        </div>

        <!-- Slider -->
        <div class="range-input">
            <input
                type="range"
                class="min-range"
                min="0"
                max="30000"
                :value="sortMinHP"
                step="1"
                @input="selectSortMinHP"
            />
            <input
                type="range"
                class="max-range"
                min="0"
                max="30000"
                :value="sortMaxHP"
                step="1"
                @input="selectSortMaxHP"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'CreatureSortSlider',
    props: ['sortMinHP', 'sortMaxHP'],
    emits: ["update:sortMinHP", "update:sortMaxHP"],
    methods: {
        selectSortMinHP(event) {
            const selectedSortMinHP = event.target.value;
            this.$emit('update:sortMinHP', selectedSortMinHP);
        },
        selectSortMaxHP(event) {
            const selectedSortMaxHP = event.target.value;
            this.$emit('update:sortMaxHP', selectedSortMaxHP);
        }
    },
    mounted() {
        const rangevalue = document.querySelector(".slider-container .hp-slider");
        const rangeInputvalue = document.querySelectorAll(".range-input input");

        let minVal = parseInt(rangeInputvalue[0].value);
        let maxVal = parseInt(rangeInputvalue[1].value);

        let maxMinVal = rangeInputvalue[0].max;
        let maxMaxVal = rangeInputvalue[1].max;

        rangevalue.style.left = `${(minVal / maxMinVal) * 100}%`;
        rangevalue.style.right = `${100 - (maxVal / maxMaxVal) * 100}%`;

        let hpGap = 500;


        const hpInputvalue = document.querySelectorAll(".hp-input input");
        for (let i = 0; i < hpInputvalue.length; i++) {
            hpInputvalue[i].addEventListener("input", e => {
                // Parse min and max values of the range input
                let minp = parseInt(hpInputvalue[0].value);
                let maxp = parseInt(hpInputvalue[1].value);
                let diff = maxp - minp;

                if (minp < 0) {
                    alert("minimum hp cannot be less than 0");
                    hpInputvalue[0].value = 0;
                    minp = 0;
                }

                // Validate the input values
                if (maxp > 30000) {
                    alert("maximum hp cannot be greater than 30000");
                    hpInputvalue[1].value = 30000;
                    maxp = 30000;
                }

                if (minp > maxp - hpGap) {
                    hpInputvalue[0].value = maxp - hpGap;
                    minp = maxp - hpGap;

                    if (minp < 0) {
                        hpInputvalue[0].value = 0;
                        minp = 0;
                    }
                }

                // Check if the hp gap is met
                // and max hp is within the range
                if (diff >= hpGap && maxp <= rangeInputvalue[1].max) {
                    if (e.target.className === "min-input") {
                        rangeInputvalue[0].value = minp;
                        let value1 = rangeInputvalue[0].max;
                        rangevalue.style.left = `${(minp / value1) * 100}%`;
                    } else {
                        rangeInputvalue[1].value = maxp;
                        let value2 = rangeInputvalue[1].max;
                        rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
                    }
                }
            });
        }

        // Add event listeners to range input elements
        for (let i = 0; i < rangeInputvalue.length; i++) {
            rangeInputvalue[i].addEventListener("input", e => {
                let minVal = parseInt(rangeInputvalue[0].value);
                let maxVal = parseInt(rangeInputvalue[1].value);

                let diff = maxVal - minVal;

                // Check if the hp gap is exceeded
                if (diff < hpGap) {
                    // Check if the input is the min range input
                    if (e.target.className === "min-range") {
                        rangeInputvalue[0].value = maxVal - hpGap;
                    } else {
                        rangeInputvalue[1].value = minVal + hpGap;
                    }
                } else {
                    // Update hp inputs and range progress
                    hpInputvalue[0].value = minVal;
                    hpInputvalue[1].value = maxVal;
                    rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                    rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
                }
            });
        }
    }
};
</script>

<style scoped>
* { 
	margin: 0; 
	padding: 0; 
} 

body { 
	display: flex; 
	align-items: center; 
	justify-content: center; 
	min-height: 100vh; 
	background: #ffffff; 
	flex-direction: column; 
} 

.main { 
	background-color: #fff; 
	border-radius: 15px; 
	box-shadow: 0 0 20px
		rgba(0, 0, 0, 0.2); 
	padding: 20px; 
	transition: transform 0.2s; 
	width: 600px; 
} 

.main:hover { 
	transform: scale(1.05); 
} 


.custom-wrapper { 
	margin: auto; 
	width: 70%; 
	padding: 2rem; 
	position: relative; 
} 


/* Styles for the hp input container */
.hp-input-container { 
	width: 100%; 
} 

.hp-input .hp-field { 
	display: flex; 
	margin-bottom: 22px; 
} 

.hp-field span { 
	margin-right: 10px; 
	margin-top: 6px; 
	font-size: 17px; 
} 

.hp-field input { 
	flex: 1; 
	height: 35px; 
	font-size: 15px; 
	font-family: "DM Sans", sans-serif; 
	border-radius: 9px; 
	text-align: center; 
	border: 0px; 
	background: #e4e4e4; 
} 

.hp-input { 
	width: 100%; 
	font-size: 19px; 
	color: #C19D53; 
    align-items:center;
} 

/* Remove Arrows/Spinners */
input::-webkit-outer-spin-button, 
input::-webkit-inner-spin-button { 
	-webkit-appearance: none; 
	margin: 0; 
} 

.slider-container { 
	width: 100%; 
} 

.slider-container { 
	height: 6px; 
	position: relative; 
	background: #e4e4e4; 
	border-radius: 5px; 
} 

.slider-container .hp-slider { 
	height: 100%; 
	left: 25%; 
	right: 15%; 
	position: absolute; 
	border-radius: 5px; 
	background: #C19D53; 
} 

.range-input { 
	position: relative; 
} 

.range-input input { 
	position: absolute; 
	width: 100%; 
	height: 5px; 
	background: none; 
	top: -5px; 
	pointer-events: none; 
	cursor: pointer; 
-webkit-appearance: none; 
appearance: none;
} 

/* Styles for the range thumb in WebKit browsers */
input[type="range"]::-webkit-slider-thumb { 
	height: 18px; 
	width: 18px; 
	border-radius: 70%; 
	background: #C19D53; 
	pointer-events: auto; 
	-webkit-appearance: none; 
} 

@media screen and (max-width: 768px) { 
	.main { 
		width: 80%; 
		margin-right: 5px; 
	} 

	.custom-wrapper { 
		width: 100%; 
		left: 0; 
		padding: 0 10px; 
	} 

	.hp-input { 
		flex-direction: column; 
		align-items: center; 
	} 

	.hp-field { 
		margin-bottom: 10px; 
	} 
}

</style>

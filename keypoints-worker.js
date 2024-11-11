// self.onmessage = function(e) {
//     if (e.data.type === 'calculateAverage') {
//         const { points, partNames } = e.data;
//         const averages = {};
//         const extremePoints = {};
//         console.log('points :>> ', points);

//         const upperArmFrontPoints = points.leftUpperArmFront || [];
//         const upperArmBackPoints = points.leftUpperArmBack || [];
//         const rightUpperArmFrontPoints = points.rightUpperArmFront || [];
//         const rightUpperArmBackPoints = points.rightUpperArmBack || [];

//         const lowerArmFrontPoints = points.leftLowerArmFront || [];
//         const lowerArmBackPoints = points.leftLowerArmBack || [];
//         const rightLowerArmFrontPoints = points.rightLowerArmFront || [];
//         const rightLowerArmBackPoints = points.rightLowerArmBack || [];

//         // Get points for hands
//         const leftHandPoints = points.leftHand || [];
//         const rightHandPoints = points.rightHand || [];

//         const leftFacePoints = points.leftFace || [];
//         const rightFacePoints = points.rightFace || [];

//         const leftLowerLegFrontPoints = points.leftLowerLegFront || [];
//         const leftLowerLegBackPoints = points.leftLowerLegBack || [];
//         const rightLowerLegFrontPoints = points.rightLowerLegFront || [];
//         const rightLowerLegBackPoints = points.rightLowerLegBack || [];
//         const leftUpperLegFrontPoints = points.leftUpperLegFront || [];
//         const leftUpperLegBackPoints = points.leftUpperLegBack || [];
//         const rightUpperLegFrontPoints = points.rightUpperLegFront || [];
//         const rightUpperLegBackPoints = points.rightUpperLegBack || [];

//         const torsoFrontPoints = points.torsoFront || [];
//         const torsoBackPoints = points.torsoBack || [];

//                 // Separate top and bottom points for upper arm
//                 // const upperFrontTop = upperArmFrontPoints.length > 0 ? upperArmFrontPoints[0] : null;
//                 // const upperFrontBottom = upperArmFrontPoints.length > 0 ? upperArmFrontPoints[upperArmFrontPoints.length - 1] : null;
//                 // const upperBackTop = upperArmBackPoints.length > 0 ? upperArmBackPoints[0] : null;
//                 // const upperBackBottom = upperArmBackPoints.length > 0 ? upperArmBackPoints[upperArmBackPoints.length - 1] : null;
//                 // const rightUpperFrontTop = rightUpperArmFrontPoints.length > 0 ? rightUpperArmFrontPoints[0] : null;
//                 // const rightUpperFrontBottom = rightUpperArmFrontPoints.length > 0 ? rightUpperArmFrontPoints[rightUpperArmFrontPoints.length - 1] : null;
//                 // const rightUpperBackTop = rightUpperArmBackPoints.length > 0 ? rightUpperArmBackPoints[0] : null;
//                 // const rightUpperBackBottom = rightUpperArmBackPoints.length > 0 ? rightUpperArmBackPoints[rightUpperArmBackPoints.length - 1] : null;
        
//                 // Separate top and bottom points for lower arm
//                 // const lowerFrontTop = lowerArmFrontPoints.length > 0 ? lowerArmFrontPoints[0] : null;
//                 // const lowerFrontBottom = lowerArmFrontPoints.length > 0 ? lowerArmFrontPoints[lowerArmFrontPoints.length - 1] : null;
//                 // const lowerBackTop = lowerArmBackPoints.length > 0 ? lowerArmBackPoints[0] : null;
//                 // const lowerBackBottom = lowerArmBackPoints.length > 0 ? lowerArmBackPoints[lowerArmBackPoints.length - 1] : null;
//                 // const rightLowerFrontTop = rightLowerArmFrontPoints.length > 0 ? rightLowerArmFrontPoints[0] : null;
//                 // const rightLowerFrontBottom = rightLowerArmFrontPoints.length > 0 ? rightLowerArmFrontPoints[rightLowerArmFrontPoints.length - 1] : null;
//                 // const rightLowerBackTop = rightLowerArmBackPoints.length > 0 ? rightLowerArmBackPoints[0] : null;
//                 // const rightLowerBackBottom = rightLowerArmBackPoints.length > 0 ? rightLowerArmBackPoints[rightLowerArmBackPoints.length - 1] : null;
        
//                 // Separate top and bottom points for hands
//                 // const leftHandTop = leftHandPoints.length > 0 ? leftHandPoints[0] : null;
//                 // const leftHandBottom = leftHandPoints.length > 0 ? leftHandPoints[leftHandPoints.length - 1] : null;
//                 // const rightHandTop = rightHandPoints.length > 0 ? rightHandPoints[0] : null;
//                 // const rightHandBottom = rightHandPoints.length > 0 ? rightHandPoints[rightHandPoints.length - 1] : null;
        
//                 // Separate top and bottom points for feet
              
//                 // // Separate top and bottom points for upper leg
//                 // const leftUpperLegFrontTop = leftUpperLegFrontPoints.length > 0 ? leftUpperLegFrontPoints[0] : null;
//                 // const leftUpperLegFrontBottom = leftUpperLegFrontPoints.length > 0 ? leftUpperLegFrontPoints[leftUpperLegFrontPoints.length - 1] : null;
//                 // const leftUpperLegBackTop = leftUpperLegBackPoints.length > 0 ? leftUpperLegBackPoints[0] : null;
//                 // const leftUpperLegBackBottom = leftUpperLegBackPoints.length > 0 ? leftUpperLegBackPoints[leftUpperLegBackPoints.length - 1] : null;
//                 // const rightUpperLegFrontTop = rightUpperLegFrontPoints.length > 0 ? rightUpperLegFrontPoints[0] : null;
//                 // const rightUpperLegFrontBottom = rightUpperLegFrontPoints.length > 0 ? rightUpperLegFrontPoints[rightUpperLegFrontPoints.length - 1] : null;
//                 // const rightUpperLegBackTop = rightUpperLegBackPoints.length > 0 ? rightUpperLegBackPoints[0] : null;
//                 // const rightUpperLegBackBottom = rightUpperLegBackPoints.length > 0 ? rightUpperLegBackPoints[rightUpperLegBackPoints.length - 1] : null;
        
//                 // // Separate top and bottom points for torso
//                 // const torsoFrontTop = torsoFrontPoints.length > 0 ? torsoFrontPoints[0] : null;
//                 // const torsoFrontBottom = torsoFrontPoints.length > 0 ? torsoFrontPoints[torsoFrontPoints.length - 1] : null;
//                 // const torsoBackTop = torsoBackPoints.length > 0 ? torsoBackPoints[0] : null;
//                 // const torsoBackBottom = torsoBackPoints.length > 0 ? torsoBackPoints[torsoBackPoints.length - 1] : null;
//         // Get points for feet
//         const leftUpperFootPoints = points.leftUpperFoot || [];
//         const leftLowerFootPoints = points.leftLowerFoot || [];
//         const rightUpperFootPoints = points.rightUpperFoot || [];
//         const rightLowerFootPoints = points.rightLowerFoot || [];
//         const leftFootPoints = points.leftFoot || [];
//         const rightFootPoints = points.rightFoot || [];

//         // Separate top and bottom points for upper arm
//         const upperFrontTop = upperArmFrontPoints.length > 0 ? upperArmFrontPoints[0] : null;
//         const upperFrontBottom = upperArmFrontPoints.length > 0 ? upperArmFrontPoints[upperArmFrontPoints.length - 1] : null;
//         const upperBackTop = upperArmBackPoints.length > 0 ? upperArmBackPoints[0] : null;
//         const upperBackBottom = upperArmBackPoints.length > 0 ? upperArmBackPoints[upperArmBackPoints.length - 1] : null;
//         const rightUpperFrontTop = rightUpperArmFrontPoints.length > 0 ? rightUpperArmFrontPoints[0] : null;
//         const rightUpperFrontBottom = rightUpperArmFrontPoints.length > 0 ? rightUpperArmFrontPoints[rightUpperArmFrontPoints.length - 1] : null;
//         const rightUpperBackTop = rightUpperArmBackPoints.length > 0 ? rightUpperArmBackPoints[0] : null;
//         const rightUpperBackBottom = rightUpperArmBackPoints.length > 0 ? rightUpperArmBackPoints[rightUpperArmBackPoints.length - 1] : null;

//         // Separate top and bottom points for lower arm
//         const lowerFrontTop = lowerArmFrontPoints.length > 0 ? lowerArmFrontPoints[0] : null;
//         const lowerFrontBottom = lowerArmFrontPoints.length > 0 ? lowerArmFrontPoints[lowerArmFrontPoints.length - 1] : null;
//         const lowerBackTop = lowerArmBackPoints.length > 0 ? lowerArmBackPoints[0] : null;
//         const lowerBackBottom = lowerArmBackPoints.length > 0 ? lowerArmBackPoints[lowerArmBackPoints.length - 1] : null;
//         const rightLowerFrontTop = rightLowerArmFrontPoints.length > 0 ? rightLowerArmFrontPoints[0] : null;
//         const rightLowerFrontBottom = rightLowerArmFrontPoints.length > 0 ? rightLowerArmFrontPoints[rightLowerArmFrontPoints.length - 1] : null;
//         const rightLowerBackTop = rightLowerArmBackPoints.length > 0 ? rightLowerArmBackPoints[0] : null;
//         const rightLowerBackBottom = rightLowerArmBackPoints.length > 0 ? rightLowerArmBackPoints[rightLowerArmBackPoints.length - 1] : null;

//         // Separate top and bottom points for hands
//         const leftHandTop = leftHandPoints.length > 0 ? leftHandPoints[0] : null;
//         const leftHandBottom = leftHandPoints.length > 0 ? leftHandPoints[leftHandPoints.length - 1] : null;
//         const rightHandTop = rightHandPoints.length > 0 ? rightHandPoints[0] : null;
//         const rightHandBottom = rightHandPoints.length > 0 ? rightHandPoints[rightHandPoints.length - 1] : null;

//         // Separate top and bottom points for feet
//         const leftUpperFootTop = leftUpperFootPoints.length > 0 ? leftUpperFootPoints[0] : null;
//         const leftUpperFootBottom = leftUpperFootPoints.length > 0 ? leftUpperFootPoints[leftUpperFootPoints.length - 1] : null;
//         const leftLowerFootTop = leftLowerFootPoints.length > 0 ? leftLowerFootPoints[0] : null;
//         const leftLowerFootBottom = leftLowerFootPoints.length > 0 ? leftLowerFootPoints[leftLowerFootPoints.length - 1] : null;
//         const rightUpperFootTop = rightUpperFootPoints.length > 0 ? rightUpperFootPoints[0] : null;
//         const rightUpperFootBottom = rightUpperFootPoints.length > 0 ? rightUpperFootPoints[rightUpperFootPoints.length - 1] : null;
//         const rightLowerFootTop = rightLowerFootPoints.length > 0 ? rightLowerFootPoints[0] : null;
//         const rightLowerFootBottom = rightLowerFootPoints.length > 0 ? rightLowerFootPoints[rightLowerFootPoints.length - 1] : null;
// // console.log('leftUpperFootTop :>> ', leftUpperFootTop);
// const leftFootTop = leftFootPoints.length > 0 ? leftFootPoints[0] : null;
// const leftFootBottom = leftFootPoints.length > 0 ? leftFootPoints[leftFootPoints.length - 1] : null;
// const rightFootTop = rightFootPoints.length > 0 ? rightFootPoints[0] : null;
// const rightFootBottom = rightFootPoints.length > 0 ? rightFootPoints[rightFootPoints.length - 1] : null;

// // Separate top and bottom points for face
// const leftFaceTop = leftFacePoints.length > 0 ? leftFacePoints[0] : null;
// const leftFaceBottom = leftFacePoints.length > 0 ? leftFacePoints[leftFacePoints.length - 1] : null;
// const rightFaceTop = rightFacePoints.length > 0 ? rightFacePoints[0] : null;
// const rightFaceBottom = rightFacePoints.length > 0 ? rightFacePoints[rightFacePoints.length - 1] : null;

// // Separate top and bottom points for lower leg
// const leftLowerLegFrontTop = leftLowerLegFrontPoints.length > 0 ? leftLowerLegFrontPoints[0] : null;
// const leftLowerLegFrontBottom = leftLowerLegFrontPoints.length > 0 ? leftLowerLegFrontPoints[leftLowerLegFrontPoints.length - 1] : null;
// const leftLowerLegBackTop = leftLowerLegBackPoints.length > 0 ? leftLowerLegBackPoints[0] : null;
// const leftLowerLegBackBottom = leftLowerLegBackPoints.length > 0 ? leftLowerLegBackPoints[leftLowerLegBackPoints.length - 1] : null;
// const rightLowerLegFrontTop = rightLowerLegFrontPoints.length > 0 ? rightLowerLegFrontPoints[0] : null;
// const rightLowerLegFrontBottom = rightLowerLegFrontPoints.length > 0 ? rightLowerLegFrontPoints[rightLowerLegFrontPoints.length - 1] : null;
// const rightLowerLegBackTop = rightLowerLegBackPoints.length > 0 ? rightLowerLegBackPoints[0] : null;
// const rightLowerLegBackBottom = rightLowerLegBackPoints.length > 0 ? rightLowerLegBackPoints[rightLowerLegBackPoints.length - 1] : null;

//         console.log('leftUpperFootPoints :>> ', leftUpperFootPoints);
// // console.log('leftUpperFootBottom :>> ', leftUpperFootBottom);
//         // Calculate combined averages for upper arm points
//         // const upperTopAverage = calculateAverageOfPoints([upperFrontTop, upperBackTop]);
//         // const upperBottomAverage = calculateAverageOfPoints([upperFrontBottom, upperBackBottom]);
//         // const rightUpperTopAverage = calculateAverageOfPoints([rightUpperFrontTop, rightUpperBackTop]);
//         // const rightUpperBottomAverage = calculateAverageOfPoints([rightUpperFrontBottom, rightUpperBackBottom]);

//         // // Calculate combined averages for lower arm points
//         // const lowerTopAverage = calculateAverageOfPoints([lowerFrontTop, lowerBackTop]);
//         // const lowerBottomAverage = calculateAverageOfPoints([lowerFrontBottom, lowerBackBottom]);
//         // const rightLowerTopAverage = calculateAverageOfPoints([rightLowerFrontTop, rightLowerBackTop]);
//         // const rightLowerBottomAverage = calculateAverageOfPoints([rightLowerFrontBottom, rightLowerBackBottom]);

//         // Calculate combined averages for foot points
//         const leftUpperFootTopAverage = calculateAverageOfPoints([leftUpperFootTop]);
//         const leftUpperFootBottomAverage = calculateAverageOfPoints([leftUpperFootBottom]);
//         const leftLowerFootTopAverage = calculateAverageOfPoints([leftLowerFootTop]);
//         const leftLowerFootBottomAverage = calculateAverageOfPoints([leftLowerFootBottom]);
//         const rightUpperFootTopAverage = calculateAverageOfPoints([rightUpperFootTop]);
//         const rightUpperFootBottomAverage = calculateAverageOfPoints([rightUpperFootBottom]);
//         const rightLowerFootTopAverage = calculateAverageOfPoints([rightLowerFootTop]);
//         const rightLowerFootBottomAverage = calculateAverageOfPoints([rightLowerFootBottom]);
       
//                // Separate top and bottom points for upper leg
//                const leftUpperLegFrontTop = leftUpperLegFrontPoints.length > 0 ? leftUpperLegFrontPoints[0] : null;
//                const leftUpperLegFrontBottom = leftUpperLegFrontPoints.length > 0 ? leftUpperLegFrontPoints[leftUpperLegFrontPoints.length - 1] : null;
//                const leftUpperLegBackTop = leftUpperLegBackPoints.length > 0 ? leftUpperLegBackPoints[0] : null;
//                const leftUpperLegBackBottom = leftUpperLegBackPoints.length > 0 ? leftUpperLegBackPoints[leftUpperLegBackPoints.length - 1] : null;
//                const rightUpperLegFrontTop = rightUpperLegFrontPoints.length > 0 ? rightUpperLegFrontPoints[0] : null;
//                const rightUpperLegFrontBottom = rightUpperLegFrontPoints.length > 0 ? rightUpperLegFrontPoints[rightUpperLegFrontPoints.length - 1] : null;
//                const rightUpperLegBackTop = rightUpperLegBackPoints.length > 0 ? rightUpperLegBackPoints[0] : null;
//                const rightUpperLegBackBottom = rightUpperLegBackPoints.length > 0 ? rightUpperLegBackPoints[rightUpperLegBackPoints.length - 1] : null;
       
//                // Separate top and bottom points for torso
//                const torsoFrontTop = torsoFrontPoints.length > 0 ? torsoFrontPoints[0] : null;
//                const torsoFrontBottom = torsoFrontPoints.length > 0 ? torsoFrontPoints[torsoFrontPoints.length - 1] : null;
//                const torsoBackTop = torsoBackPoints.length > 0 ? torsoBackPoints[0] : null;
//                const torsoBackBottom = torsoBackPoints.length > 0 ? torsoBackPoints[torsoBackPoints.length - 1] : null;
       
//                // Calculate combined averages for upper arm points
//                const upperTopAverage = calculateAverageOfPoints([upperFrontTop, upperBackTop]);
//                const upperBottomAverage = calculateAverageOfPoints([upperFrontBottom, upperBackBottom]);
//                const rightUpperTopAverage = calculateAverageOfPoints([rightUpperFrontTop, rightUpperBackTop]);
//                const rightUpperBottomAverage = calculateAverageOfPoints([rightUpperFrontBottom, rightUpperBackBottom]);
       
//                // Calculate combined averages for lower arm points
//                const lowerTopAverage = calculateAverageOfPoints([lowerFrontTop, lowerBackTop]);
//                const lowerBottomAverage = calculateAverageOfPoints([lowerFrontBottom, lowerBackBottom]);
//                const rightLowerTopAverage = calculateAverageOfPoints([rightLowerFrontTop, rightLowerBackTop]);
//                const rightLowerBottomAverage = calculateAverageOfPoints([rightLowerFrontBottom, rightLowerBackBottom]);
//                // Calculate combined averages for hand points
//                const leftHandTopAverage = calculateAverageOfPoints([leftHandTop]);
//                const leftHandBottomAverage = calculateAverageOfPoints([leftHandBottom]);
//                const rightHandTopAverage = calculateAverageOfPoints([rightHandTop]);
//                const rightHandBottomAverage = calculateAverageOfPoints([rightHandBottom]);
       
//                // Calculate combined averages for foot points
//                const leftFootTopAverage = calculateAverageOfPoints([leftFootTop]);
//                const leftFootBottomAverage = calculateAverageOfPoints([leftFootBottom]);
//                const rightFootTopAverage = calculateAverageOfPoints([rightFootTop]);
//                const rightFootBottomAverage = calculateAverageOfPoints([rightFootBottom]);
       
//                // Calculate combined averages for face points
//                const leftFaceTopAverage = calculateAverageOfPoints([leftFaceTop]);
//                const leftFaceBottomAverage = calculateAverageOfPoints([leftFaceBottom]);
//                const rightFaceTopAverage = calculateAverageOfPoints([rightFaceTop]);
//                const rightFaceBottomAverage = calculateAverageOfPoints([rightFaceBottom]);
       
       
       
       
       
//         // Calculate combined averages for lower leg points
//         const leftLowerLegFrontTopAverage = calculateAverageOfPoints([leftLowerLegFrontTop]);
//         const leftLowerLegFrontBottomAverage = calculateAverageOfPoints([leftLowerLegFrontBottom]);
//         const leftLowerLegBackTopAverage = calculateAverageOfPoints([leftLowerLegBackTop]);
//         const leftLowerLegBackBottomAverage = calculateAverageOfPoints([leftLowerLegBackBottom]);
//         const rightLowerLegFrontTopAverage = calculateAverageOfPoints([rightLowerLegFrontTop]);
//         const rightLowerLegFrontBottomAverage = calculateAverageOfPoints([rightLowerLegFrontBottom]);
//         const rightLowerLegBackTopAverage = calculateAverageOfPoints([rightLowerLegBackTop]);
//         const rightLowerLegBackBottomAverage = calculateAverageOfPoints([rightLowerLegBackBottom]);

//         // Calculate combined averages for upper leg points
//         const leftUpperLegFrontTopAverage = calculateAverageOfPoints([leftUpperLegFrontTop]);
//         const leftUpperLegFrontBottomAverage = calculateAverageOfPoints([leftUpperLegFrontBottom]);
//         const leftUpperLegBackTopAverage = calculateAverageOfPoints([leftUpperLegBackTop]);
//         const leftUpperLegBackBottomAverage = calculateAverageOfPoints([leftUpperLegBackBottom]);
//         const rightUpperLegFrontTopAverage = calculateAverageOfPoints([rightUpperLegFrontTop]);
//         const rightUpperLegFrontBottomAverage = calculateAverageOfPoints([rightUpperLegFrontBottom]);
//         const rightUpperLegBackTopAverage = calculateAverageOfPoints([rightUpperLegBackTop]);
//         const rightUpperLegBackBottomAverage = calculateAverageOfPoints([rightUpperLegBackBottom]);

//         // Calculate combined averages for torso points
//         const torsoFrontTopAverage = calculateAverageOfPoints([torsoFrontTop]);
//         const torsoFrontBottomAverage = calculateAverageOfPoints([torsoFrontBottom]);
//         const torsoBackTopAverage = calculateAverageOfPoints([torsoBackTop]);
//         const torsoBackBottomAverage = calculateAverageOfPoints([torsoBackBottom]);

//         // Store the average points
//         averages['combined_upper_arm'] = {
//             top: upperTopAverage,
//             bottom: upperBottomAverage
//         };

//         averages['combined_right_upper_arm'] = {
//             top: rightUpperTopAverage,
//             bottom: rightUpperBottomAverage
//         };

//         averages['combined_lower_arm'] = {
//             top: lowerTopAverage,
//             bottom: lowerBottomAverage
//         };

//         averages['combined_right_lower_arm'] = {
//             top: rightLowerTopAverage,
//             bottom: rightLowerBottomAverage
//         };

//         averages['combined_left_upper_foot'] = {
//             top: leftUpperFootTopAverage,
//             bottom: leftUpperFootBottomAverage
//         };

//         averages['combined_left_lower_foot'] = {
//             top: leftLowerFootTopAverage,
//             bottom: leftLowerFootBottomAverage
//         };

//         averages['combined_right_upper_foot'] = {
//             top: rightUpperFootTopAverage,
//             bottom: rightUpperFootBottomAverage
//         };

//         averages['combined_right_lower_foot'] = {
//             top: rightLowerFootTopAverage,
//             bottom: rightLowerFootBottomAverage
//         };

//         // Store the hand points
//         averages['left_hand'] = {
//             top: leftHandTop,
//             bottom: leftHandBottom
//         };

//         averages['right_hand'] = {
//             top: rightHandTop,
//             bottom: rightHandBottom
//         };
//         // Store the average points
//         averages['combined_upper_arm'] = {
//             top: upperTopAverage,
//             bottom: upperBottomAverage
//         };

//         averages['combined_right_upper_arm'] = {
//             top: rightUpperTopAverage,
//             bottom: rightUpperBottomAverage
//         };

//         averages['combined_lower_arm'] = {
//             top: lowerTopAverage,
//             bottom: lowerBottomAverage
//         };

//         averages['combined_right_lower_arm'] = {
//             top: rightLowerTopAverage,
//             bottom: rightLowerBottomAverage
//         };

//         averages['combined_left_hand'] = {
//             top: leftHandTopAverage,
//             bottom: leftHandBottomAverage
//         };

//         averages['combined_right_hand'] = {
//             top: rightHandTopAverage,
//             bottom: rightHandBottomAverage
//         };

//         averages['combined_left_foot'] = {
//             top: leftFootTopAverage,
//             bottom: leftFootBottomAverage
//         };

//         averages['combined_right_foot'] = {
//             top: rightFootTopAverage,
//             bottom: rightFootBottomAverage
//         };

//         averages['combined_left_face'] = {
//             top: leftFaceTopAverage,
//             bottom: leftFaceBottomAverage
//         };

//         averages['combined_right_face'] = {
//             top: rightFaceTopAverage,
//             bottom: rightFaceBottomAverage
//         };

//         averages['combined_left_lower_leg'] = {
//             top: leftLowerLegFrontTopAverage,
//             bottom: leftLowerLegFrontBottomAverage
//         };

//         averages['combined_right_lower_leg'] = {
//             top: rightLowerLegFrontTopAverage,
//             bottom: rightLowerLegFrontBottomAverage
//         };

//         averages['combined_left_upper_leg'] = {
//             top: leftUpperLegFrontTopAverage,
//             bottom: leftUpperLegFrontBottomAverage
//         };

//         averages['combined_right_upper_leg'] = {
//             top: rightUpperLegFrontTopAverage,
//             bottom: rightUpperLegFrontBottomAverage
//         };

//         averages['combined_torso'] = {
//             top: torsoFrontTopAverage,
//             bottom: torsoFrontBottomAverage
//         };

//         extremePoints[partNames.leftUpperArmFront] = {
//             top: upperFrontTop,
//             bottom: upperFrontBottom
//         };
//         extremePoints[partNames.leftUpperArmBack] = {
//             top: upperBackTop,
//             bottom: upperBackBottom
//         };
//         extremePoints[partNames.leftLowerArmFront] = {
//             top: lowerFrontTop,
//             bottom: lowerFrontBottom
//         };
//         extremePoints[partNames.leftLowerArmBack] = {
//             top: lowerBackTop,
//             bottom: lowerBackBottom
//         };
//         extremePoints[partNames.leftHand] = {
//             top: leftHandTop,
//             bottom: leftHandBottom
//         };
//         extremePoints[partNames.rightUpperArmFront] = {
//             top: rightUpperFrontTop,
//             bottom: rightUpperFrontBottom
//         };
//         extremePoints[partNames.rightUpperArmBack] = {
//             top: rightUpperBackTop,
//             bottom: rightUpperBackBottom
//         };
//         extremePoints[partNames.rightLowerArmFront] = {
//             top: rightLowerFrontTop,
//             bottom: rightLowerFrontBottom
//         };
//         extremePoints[partNames.rightLowerArmBack] = {
//             top: rightLowerBackTop,
//             bottom: rightLowerBackBottom
//         };
//         extremePoints[partNames.rightHand] = {
//             top: rightHandTop,
//             bottom: rightHandBottom
//         };
//         extremePoints[partNames.leftFoot] = {
//             top: leftFootTop,
//             bottom: leftFootBottom
//         };
//         extremePoints[partNames.rightFoot] = {
//             top: rightFootTop,
//             bottom: rightFootBottom
//         };
//         extremePoints[partNames.leftFace] = {
//             top: leftFaceTop,
//             bottom: leftFaceBottom
//         };
//         extremePoints[partNames.rightFace] = {
//             top: rightFaceTop,
//             bottom: rightFaceBottom
//         };
//         extremePoints[partNames.leftLowerLegFront] = {
//             top: leftLowerLegFrontTop,
//             bottom: leftLowerLegFrontBottom
//         };
//         extremePoints[partNames.leftLowerLegBack] = {
//             top: leftLowerLegBackTop,
//             bottom: leftLowerLegBackBottom
//         };
//         extremePoints[partNames.rightLowerLegFront] = {
//             top: rightLowerLegFrontTop,
//             bottom: rightLowerLegFrontBottom
//         };
//         extremePoints[partNames.rightLowerLegBack] = {
//             top: rightLowerLegBackTop,
//             bottom: rightLowerLegBackBottom
//         };
//         extremePoints[partNames.leftUpperLegFront] = {
//             top: leftUpperLegFrontTop,
//             bottom: leftUpperLegFrontBottom
//         };
//         extremePoints[partNames.leftUpperLegBack] = {
//             top: leftUpperLegBackTop,
//             bottom: leftUpperLegBackBottom
//         };
//         extremePoints[partNames.rightUpperLegFront] = {
//             top: rightUpperLegFrontTop,
//             bottom: rightUpperLegFrontBottom
//         };
//         extremePoints[partNames.rightUpperLegBack] = {
//             top: rightUpperLegBackTop,
//             bottom: rightUpperLegBackBottom
//         };
//         extremePoints[partNames.torsoFront] = {
//             top: torsoFrontTop,
//             bottom: torsoFrontBottom
//         };
//         extremePoints[partNames.torsoBack] = {
//             top: torsoBackTop,
//             bottom: torsoBackBottom
//         };

//         console.log('Sending combined results:', {
//             averages,
//             extremePoints,
//             allExtremePoints: true
//         });


//         // Store individual extreme points for reference
//         extremePoints[partNames.leftUpperArmFront] = {
//             top: upperFrontTop,
//             bottom: upperFrontBottom
//         };
//         extremePoints[partNames.leftUpperArmBack] = {
//             top: upperBackTop,
//             bottom: upperBackBottom
//         };
//         extremePoints[partNames.leftLowerArmFront] = {
//             top: lowerFrontTop,
//             bottom: lowerFrontBottom
//         };
//         extremePoints[partNames.leftLowerArmBack] = {
//             top: lowerBackTop,
//             bottom: lowerBackBottom
//         };
//         extremePoints[partNames.leftHand] = {
//             top: leftHandTop,
//             bottom: leftHandBottom
//         };
//         extremePoints[partNames.rightUpperArmFront] = {
//             top: rightUpperFrontTop,
//             bottom: rightUpperFrontBottom
//         };
//         extremePoints[partNames.rightUpperArmBack] = {
//             top: rightUpperBackTop,
//             bottom: rightUpperBackBottom
//         };
//         extremePoints[partNames.rightLowerArmFront] = {
//             top: rightLowerFrontTop,
//             bottom: rightLowerFrontBottom
//         };
//         extremePoints[partNames.rightLowerArmBack] = {
//             top: rightLowerBackTop,
//             bottom: rightLowerBackBottom
//         };
//         extremePoints[partNames.rightHand] = {
//             top: rightHandTop,
//             bottom: rightHandBottom
//         };
//         extremePoints[partNames.leftUpperFoot] = {
//             top: leftUpperFootTop,
//             bottom: leftUpperFootBottom
//         };
//         extremePoints[partNames.leftLowerFoot] = {
//             top: leftLowerFootTop,
//             bottom: leftLowerFootBottom
//         };
//         extremePoints[partNames.rightUpperFoot] = {
//             top: rightUpperFootTop,
//             bottom: rightUpperFootBottom
//         };
//         extremePoints[partNames.rightLowerFoot] = {
//             top: rightLowerFootTop,
//             bottom: rightLowerFootBottom
//         };

//         console.log('Sending combined results:', {
//             averages,
//             extremePoints,
//             allExtremePoints: true
//         });

//         self.postMessage({
//             type: 'combinedResults',
//             averages: averages,
//             extremePoints: extremePoints,
//             allExtremePoints: true
//         });
//     } else {
//         // Regular point calculation case
//         const { imageData, partName, width, height } = e.data;
//         const extremePoints = findImageExtremePoints(imageData, width, height);

//         self.postMessage({
//             type: 'combinedResults',
//             partName: partName,
//             extremePoints: extremePoints
//         });
//     }
// };

// function findImageExtremePoints(imageData, width, height) {
//     let topMost = { x: -1, y: height };
//     let bottomMost = { x: -1, y: -1 };

//     for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
//             const index = (y * width + x) * 4;
//             if (imageData[index + 3] > 0) {
//                 if (y < topMost.y) {
//                     topMost = { x, y };
//                 }
//                 if (y > bottomMost.y) {
//                     bottomMost = { x, y };
//                 }
//             }
//         }
//     }

//     return {
//         top: topMost.x !== -1 ? topMost : null,
//         bottom: bottomMost.x !== -1 ? bottomMost : null
//     };
// }

// function calculateAverageOfPoints(points) {
//     // Filter out null or undefined points
//     const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

//     if (validPoints.length === 0) {
//         return null;
//     }

//     const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
//     const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

//     return {
//         x: sumX / validPoints.length,
//         y: sumY / validPoints.length
//     };
// }


// function calculateAverageOfPoints(points) {
//     // Filter out null or undefined points
//     const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

//     if (validPoints.length === 0) {
//         return null;
//     }

//     const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
//     const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

//     return {
//         x: sumX / validPoints.length,
//         y: sumY / validPoints.length
//     };
// }

self.onmessage = function(e) {
    if (e.data.type === 'calculateAverage') {
        const { points, partNames } = e.data;
        const averages = {};
        const extremePoints = {};

        console.log('points :>> ', points);

        // Function to get top and bottom points for a given part
        function getTopBottomPoints(partPoints) {
            const top = partPoints.length > 0 ? partPoints[0] : null;
            const bottom = partPoints.length > 0 ? partPoints[partPoints.length - 1] : null;
            return { top, bottom };
        }

        // Function to calculate combined averages for top and bottom points
        function calculateCombinedAverages(partName, topPoints, bottomPoints) {
            const topAverage = calculateAverageOfPoints(topPoints);
            const bottomAverage = calculateAverageOfPoints(bottomPoints);
            averages[partName] = { top: topAverage, bottom: bottomAverage };
        }

        // Function to store extreme points for a given part
        function storeExtremePoints(partName, top, bottom) {
            extremePoints[partName] = { top, bottom };
        }

        // Process each part
        const parts = [
            { name: 'leftUpperArm', front: 'leftUpperArmFront', back: 'leftUpperArmBack' },
            { name: 'rightUpperArm', front: 'rightUpperArmFront', back: 'rightUpperArmBack' },
            { name: 'leftLowerArm', front: 'leftLowerArmFront', back: 'leftLowerArmBack' },
            { name: 'rightLowerArm', front: 'rightLowerArmFront', back: 'rightLowerArmBack' },
            { name: 'leftUpperLeg', front: 'leftUpperLegFront', back: 'leftUpperLegBack' },
            { name: 'rightUpperLeg', front: 'rightUpperLegFront', back: 'rightUpperLegBack' },
            { name: 'leftLowerLeg', front: 'leftLowerLegFront', back: 'leftLowerLegBack' },
            { name: 'rightLowerLeg', front: 'rightLowerLegFront', back: 'rightLowerLegBack' },
            { name: 'torso', front: 'torsoFront', back: 'torsoBack' },
            { name: 'leftFace', points: 'leftFace' },
            { name: 'rightFace', points: 'rightFace' },
            { name: 'leftHand', points: 'leftHand' },
            { name: 'rightHand', points: 'rightHand' },
            { name: 'leftFoot', points: 'leftFoot' },
            { name: 'rightFoot', points: 'rightFoot' }
        ];

        parts.forEach(part => {
            if (part.points) {
                const { top, bottom } = getTopBottomPoints(points[part.points]);
                storeExtremePoints(partNames[part.points], top, bottom);
                calculateCombinedAverages(`combined_${part.name}`, [top], [bottom]);
            } else {
                const frontPoints = points[part.front];
                const backPoints = points[part.back];
                const { top: frontTop, bottom: frontBottom } = getTopBottomPoints(frontPoints);
                const { top: backTop, bottom: backBottom } = getTopBottomPoints(backPoints);
                storeExtremePoints(partNames[part.front], frontTop, frontBottom);
                storeExtremePoints(partNames[part.back], backTop, backBottom);
                calculateCombinedAverages(`combined_${part.name}`, [frontTop, backTop], [frontBottom, backBottom]);
            }
        });

        console.log('Sending combined results:', { averages, extremePoints, allExtremePoints: true });

        self.postMessage({
            type: 'combinedResults',
            averages: averages,
            extremePoints: extremePoints,
            allExtremePoints: true
        });
    } else {
        // Regular point calculation case
        const { imageData, partName, width, height } = e.data;
        const extremePoints = findImageExtremePoints(imageData, width, height);

        self.postMessage({
            type: 'combinedResults',
            partName: partName,
            extremePoints: extremePoints
        });
    }
};

function findImageExtremePoints(imageData, width, height) {
    let topMost = { x: -1, y: height };
    let bottomMost = { x: -1, y: -1 };

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            if (imageData[index + 3] > 0) {
                if (y < topMost.y) {
                    topMost = { x, y };
                }
                if (y > bottomMost.y) {
                    bottomMost = { x, y };
                }
            }
        }
    }

    return {
        top: topMost.x !== -1 ? topMost : null,
        bottom: bottomMost.x !== -1 ? bottomMost : null
    };
}

function calculateAverageOfPoints(points) {
    const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

    if (validPoints.length === 0) {
        return null;
    }

    const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
    const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

    return {
        x: sumX / validPoints.length,
        y: sumY / validPoints.length
    };
}